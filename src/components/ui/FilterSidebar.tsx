"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterOption {
    label: string;
    value: string;
    count?: number;
}

interface FilterGroup {
    title: string;
    options: FilterOption[];
}

interface FilterSidebarProps {
    filters: FilterGroup[];
    onFilterChange?: (filters: Record<string, string[]>) => void;
    onClear?: () => void;
}

export function FilterSidebar({ filters, onFilterChange, onClear }: FilterSidebarProps) {
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleSection = (title: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    const handleFilterChange = (groupTitle: string, value: string) => {
        setSelectedFilters(prev => {
            const groupFilters = prev[groupTitle] || [];
            const newGroupFilters = groupFilters.includes(value)
                ? groupFilters.filter(v => v !== value)
                : [...groupFilters, value];

            const newFilters = {
                ...prev,
                [groupTitle]: newGroupFilters,
            };

            if (newGroupFilters.length === 0) {
                delete newFilters[groupTitle];
            }

            onFilterChange?.(newFilters);
            return newFilters;
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters({});
        onClear?.();
    };

    const activeFilterCount = Object.values(selectedFilters).reduce(
        (sum, filters) => sum + filters.length,
        0
    );

    return (
        <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-theme-text-primary">Filters</h2>
                    {activeFilterCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearAllFilters}
                            className="text-brand-red hover:text-brand-red/80"
                        >
                            <X className="h-4 w-4 mr-1" />
                            Clear ({activeFilterCount})
                        </Button>
                    )}
                </div>

                <div className="space-y-4">
                    {filters.map((group) => {
                        const isExpanded = expandedSections[group.title] ?? true;
                        return (
                            <div
                                key={group.title}
                                className="border border-theme-border rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleSection(group.title)}
                                    className="w-full flex items-center justify-between p-4 bg-theme-bg-surface hover:bg-theme-bg-main transition-colors"
                                >
                                    <span className="font-semibold text-theme-text-primary">
                                        {group.title}
                                    </span>
                                    {isExpanded ? (
                                        <ChevronUp className="h-4 w-4 text-theme-text-secondary" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4 text-theme-text-secondary" />
                                    )}
                                </button>

                                {isExpanded && (
                                    <div className="p-4 space-y-2 bg-theme-bg-main">
                                        {group.options.map((option) => {
                                            const isSelected =
                                                selectedFilters[group.title]?.includes(option.value) ?? false;
                                            return (
                                                <label
                                                    key={option.value}
                                                    className="flex items-center gap-2 cursor-pointer group"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() =>
                                                            handleFilterChange(group.title, option.value)
                                                        }
                                                        className="h-4 w-4 rounded border-theme-border text-brand-red focus:ring-brand-red focus:ring-offset-0"
                                                    />
                                                    <span className="text-sm text-theme-text-secondary group-hover:text-theme-text-primary transition-colors flex-1">
                                                        {option.label}
                                                    </span>
                                                    {option.count !== undefined && (
                                                        <span className="text-xs text-theme-text-secondary">
                                                            ({option.count})
                                                        </span>
                                                    )}
                                                </label>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}

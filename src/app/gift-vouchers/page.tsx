"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { giftVouchers } from "@/lib/data";
import { Gift, Check } from "lucide-react";

export default function GiftVouchersPage() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount("");
    };

    const handleCustomAmount = (value: string) => {
        setCustomAmount(value);
        setSelectedAmount(null);
    };

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Gift Vouchers" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                            <Gift className="h-10 w-10 text-brand-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
                            Gift Vouchers
                        </h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            Give the gift of choice with our commercial kitchen equipment vouchers
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {/* Voucher Amount Selection */}
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8 mb-6">
                            <h2 className="text-xl font-bold text-theme-text-primary mb-6">
                                Select Voucher Amount
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                {giftVouchers.map((voucher) => (
                                    <button
                                        key={voucher.value}
                                        onClick={() => handleAmountSelect(voucher.value)}
                                        className={`
                                            relative p-6 rounded-lg border-2 transition-all
                                            ${selectedAmount === voucher.value
                                                ? 'border-brand-red bg-brand-red/10'
                                                : 'border-theme-border hover:border-brand-red/50'
                                            }
                                        `}
                                    >
                                        {selectedAmount === voucher.value && (
                                            <div className="absolute top-2 right-2 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
                                                <Check className="h-4 w-4 text-brand-white" />
                                            </div>
                                        )}
                                        <div className="text-2xl font-bold text-theme-text-primary">
                                            {voucher.label}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="border-t border-theme-border pt-6">
                                <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Or enter a custom amount
                                </label>
                                <Input
                                    type="number"
                                    placeholder="Enter amount (min Rs. 5,000)"
                                    value={customAmount}
                                    onChange={(e) => handleCustomAmount(e.target.value)}
                                    className="max-w-xs"
                                />
                            </div>
                        </div>

                        {/* Recipient Details */}
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8 mb-6">
                            <h2 className="text-xl font-bold text-theme-text-primary mb-6">
                                Recipient Details
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Recipient Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="recipient@example.com"
                                        value={recipientEmail}
                                        onChange={(e) => setRecipientEmail(e.target.value)}
                                    />
                                    <p className="text-xs text-theme-text-secondary mt-1">
                                        The voucher will be sent to this email address
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Personal Message (Optional)
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Add a personal message to your gift..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-3 py-2 rounded-md border border-theme-border bg-theme-bg-main text-theme-text-primary placeholder:text-theme-text-secondary focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Summary and Purchase */}
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-lg font-medium text-theme-text-primary">
                                    Voucher Value:
                                </span>
                                <span className="text-2xl font-bold text-brand-red">
                                    Rs. {(selectedAmount || parseInt(customAmount) || 0).toLocaleString()}
                                </span>
                            </div>

                            <Button
                                size="lg"
                                className="w-full"
                                disabled={(!selectedAmount && !customAmount) || !recipientEmail}
                            >
                                Purchase Gift Voucher
                            </Button>

                            <p className="text-xs text-theme-text-secondary text-center mt-4">
                                Vouchers are delivered instantly via email and are valid for 12 months
                            </p>
                        </div>

                        {/* How it Works */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-brand-white font-bold">
                                    1
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2">
                                    Choose Amount
                                </h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Select from preset amounts or enter a custom value
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-brand-white font-bold">
                                    2
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2">
                                    Personalize
                                </h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Add recipient's email and a personal message
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-brand-white font-bold">
                                    3
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2">
                                    Instant Delivery
                                </h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Voucher is sent instantly to the recipient's email
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Truck, CheckCircle, MapPin } from "lucide-react";

export default function TrackOrderPage() {
    const [tracking, setTracking] = useState(false);

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Track Order" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4 text-center">Track Your Order</h1>
                        <p className="text-lg text-theme-text-secondary mb-12 text-center">
                            Enter your order number to track your shipment
                        </p>

                        {/* Tracking Form */}
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8 mb-8">
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setTracking(true); }}>
                                <div>
                                    <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Order Number
                                    </label>
                                    <Input placeholder="e.g., ORD-12345" className="text-lg py-6" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Email Address
                                    </label>
                                    <Input type="email" placeholder="you@example.com" className="text-lg py-6" />
                                </div>
                                <Button type="submit" className="w-full" size="lg">
                                    Track Order
                                </Button>
                            </form>
                        </div>

                        {/* Demo Tracking Result */}
                        {tracking && (
                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-theme-text-primary mb-2">Order #ORD-12345</h2>
                                    <p className="text-theme-text-secondary">Estimated delivery: 2 days</p>
                                </div>

                                {/* Timeline */}
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                <CheckCircle className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="w-0.5 h-16 bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="font-semibold text-theme-text-primary">Order Confirmed</h3>
                                            <p className="text-sm text-theme-text-secondary">Nov 18, 2025 10:30 AM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                <Package className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="w-0.5 h-16 bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="font-semibold text-theme-text-primary">Processing</h3>
                                            <p className="text-sm text-theme-text-secondary">Nov 18, 2025 2:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center animate-pulse">
                                                <Truck className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="w-0.5 h-16 bg-theme-border"></div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="font-semibold text-theme-text-primary">Out for Delivery</h3>
                                            <p className="text-sm text-brand-red font-medium">In Transit</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 bg-theme-border rounded-full flex items-center justify-center">
                                                <MapPin className="h-6 w-6 text-theme-text-secondary" />
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="font-semibold text-theme-text-secondary">Delivered</h3>
                                            <p className="text-sm text-theme-text-secondary">Pending</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

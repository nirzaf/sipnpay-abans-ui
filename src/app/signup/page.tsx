import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">
                    <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8 shadow-lg">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-theme-text-primary mb-2">
                                Create Account
                            </h1>
                            <p className="text-theme-text-secondary">
                                Join us to get exclusive deals and offers
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-theme-text-primary mb-2">
                                        First Name
                                    </label>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="John"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Last Name
                                    </label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Phone Number
                                </label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+94 XX XXX XXXX"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Confirm Password
                                </label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 mt-0.5 rounded border-theme-border text-brand-red focus:ring-brand-red"
                                    />
                                    <span className="ml-2 text-sm text-theme-text-secondary">
                                        I agree to the{" "}
                                        <Link href="/terms" className="text-brand-red hover:text-brand-red/80">
                                            Terms & Conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/privacy" className="text-brand-red hover:text-brand-red/80">
                                            Privacy Policy
                                        </Link>
                                    </span>
                                </label>
                            </div>

                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-theme-text-secondary">
                                Already have an account?{" "}
                                <Link href="/login" className="text-brand-red hover:text-brand-red/80 font-semibold">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

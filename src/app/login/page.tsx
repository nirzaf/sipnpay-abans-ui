import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">
                    <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8 shadow-lg">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-theme-text-primary mb-2">
                                Welcome Back
                            </h1>
                            <p className="text-theme-text-secondary">
                                Sign in to your account to continue
                            </p>
                        </div>

                        <form className="space-y-6">
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

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-theme-border text-brand-red focus:ring-brand-red"
                                    />
                                    <span className="ml-2 text-sm text-theme-text-secondary">Remember me</span>
                                </label>
                                <Link href="/forgot-password" className="text-sm text-brand-red hover:text-brand-red/80">
                                    Forgot password?
                                </Link>
                            </div>

                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-theme-text-secondary">
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-brand-red hover:text-brand-red/80 font-semibold">
                                    Sign up
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

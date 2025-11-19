import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Contact Us" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4 text-center">Get In Touch</h1>
                        <p className="text-lg text-theme-text-secondary mb-12 text-center">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-6">Send a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-theme-text-primary mb-2">First Name</label>
                                            <Input placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-theme-text-primary mb-2">Last Name</label>
                                            <Input placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-theme-text-primary mb-2">Email</label>
                                        <Input type="email" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-theme-text-primary mb-2">Phone</label>
                                        <Input type="tel" placeholder="+94 XX XXX XXXX" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-theme-text-primary mb-2">Subject</label>
                                        <Input placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-theme-text-primary mb-2">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full px-3 py-2 rounded-md border border-theme-border bg-theme-bg-main text-theme-text-primary focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none"
                                            placeholder="Your message..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-brand-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-theme-text-primary mb-2">Visit Us</h3>
                                            <p className="text-theme-text-secondary text-sm">
                                                123 Galle Road<br />
                                                Colombo 03<br />
                                                Sri Lanka
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-6 w-6 text-brand-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-theme-text-primary mb-2">Call Us</h3>
                                            <p className="text-theme-text-secondary text-sm">
                                                +94 112 222 888<br />
                                                +94 777 888 999
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-6 w-6 text-brand-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-theme-text-primary mb-2">Email Us</h3>
                                            <p className="text-theme-text-secondary text-sm">
                                                info@sipandplay.lk<br />
                                                sales@sipandplay.lk
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-6 w-6 text-brand-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-theme-text-primary mb-2">Business Hours</h3>
                                            <p className="text-theme-text-secondary text-sm">
                                                Mon - Fri: 9:00 AM - 6:00 PM<br />
                                                Saturday: 9:00 AM - 2:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

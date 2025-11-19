import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationsPage() {
    const locations = [
        {
            name: "Colombo Showroom",
            address: "123 Galle Road, Colombo 03",
            phone: "+94 112 222 888",
            hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM",
        },
        {
            name: "Kandy Branch",
            address: "456 Peradeniya Road, Kandy",
            phone: "+94 812 345 678",
            hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM",
        },
        {
            name: "Galle Outlet",
            address: "789 Matara Road, Galle",
            phone: "+94 912 456 789",
            hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM",
        },
    ];

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Showroom Locations" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-theme-text-primary mb-4 text-center">Our Showrooms</h1>
                    <p className="text-lg text-theme-text-secondary mb-12 text-center max-w-2xl mx-auto">
                        Visit our showrooms to see our products in person and speak with our expert team
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {locations.map((location, index) => (
                            <div key={index} className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                <h2 className="text-xl font-bold text-theme-text-primary mb-4">{location.name}</h2>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-theme-text-secondary">{location.address}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-theme-text-secondary">{location.phone}</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-theme-text-secondary">{location.hours}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Building2, Calendar, Users } from "lucide-react";
import Image from "next/image";

export default function CommercialProjectsPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Commercial Projects" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
                            Our Commercial Projects
                        </h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            Trusted by leading restaurants, hotels, and commercial kitchens across Sri Lanka
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center">
                            <Building2 className="h-12 w-12 text-brand-red mx-auto mb-4" />
                            <div className="text-3xl font-bold text-theme-text-primary mb-2">150+</div>
                            <div className="text-sm text-theme-text-secondary">Projects Completed</div>
                        </div>
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center">
                            <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
                            <div className="text-3xl font-bold text-theme-text-primary mb-2">100+</div>
                            <div className="text-sm text-theme-text-secondary">Happy Clients</div>
                        </div>
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center">
                            <Calendar className="h-12 w-12 text-brand-red mx-auto mb-4" />
                            <div className="text-3xl font-bold text-theme-text-primary mb-2">15+</div>
                            <div className="text-sm text-theme-text-secondary">Years Experience</div>
                        </div>
                    </div>

                    {/* Featured Projects */}
                    <h2 className="text-2xl font-bold text-theme-text-primary mb-6">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-theme-bg-surface border border-theme-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-64 bg-theme-bg-main">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-theme-text-primary mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-theme-text-secondary mb-4">
                                        {project.description}
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-theme-text-secondary">Client:</span>
                                            <span className="text-theme-text-primary font-medium">
                                                {project.client}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-theme-text-secondary">Category:</span>
                                            <span className="text-theme-text-primary font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-theme-text-secondary">Completed:</span>
                                            <span className="text-theme-text-primary font-medium">
                                                {project.completedDate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
                            Have a Commercial Kitchen Project?
                        </h2>
                        <p className="text-theme-text-secondary mb-6 max-w-2xl mx-auto">
                            Our team of experts can help design and equip your commercial kitchen with the best equipment suited to your needs.
                        </p>
                        <Button size="lg">
                            Request a Consultation
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

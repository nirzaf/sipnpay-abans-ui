"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        id: 1,
        title: "Kitchenware Spotlight",
        subtitle: "Premium Tools for Every Kitchen",
        discount: "43% OFF",
        oldPrice: 320000,
        newPrice: 182400,
        monthly: 15200,
        offerEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        imageSrc: "/kitchenware/ke10.jpg",
        cta: "Shop Now",
    },
    {
        id: 2,
        title: "Chef Essentials",
        subtitle: "Durable, reliable, and stylish",
        discount: "25% OFF",
        oldPrice: 295000,
        newPrice: 221250,
        monthly: 18437,
        offerEndsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        imageSrc: "/kitchenware/ke11.jpg",
        cta: "Explore Range",
    },
    {
        id: 3,
        title: "Serveware Showcase",
        subtitle: "Elevate presentation and service",
        discount: "Seasonal Deals",
        offerEndsAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        imageSrc: "/kitchenware/ke12.jpeg",
        cta: "View Details",
    },
    {
        id: 4,
        title: "Pro-Grade Selection",
        subtitle: "Built for commercial performance",
        discount: "Bundle and save",
        price: "Project pricing available",
        imageSrc: "/kitchenware/ke14.jpeg",
        cta: "Get Started",
    },
    {
        id: 5,
        title: "Modern Kitchenware",
        subtitle: "Minimal aesthetics, maximum utility",
        discount: "Clearance picks",
        price: "Up to 30% OFF",
        imageSrc: "/kitchenware/ke15.jpeg",
        cta: "Browse Collection",
    },
    {
        id: 6,
        title: "Bar & Beverage Tools",
        subtitle: "Precision for perfect pours",
        discount: "Special offers",
        price: "New arrivals",
        imageSrc: "/kitchenware/ke21.jpeg",
        cta: "Shop Bar",
    },
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        const tick = setInterval(() => setNow(Date.now()), 1000);
        return () => {
            clearInterval(slideTimer);
            clearInterval(tick);
        };
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="w-full h-full relative flex items-center justify-center text-white">
                        <Image
                            src={slide.imageSrc}
                            alt={slide.title}
                            fill
                            priority={index === currentSlide}
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative w-full px-2 sm:px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                            <div className="space-y-6 z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
                                        {slide.discount}
                                    </span>
                                    {slide.offerEndsAt && (
                                        <CountdownBadge endsAt={slide.offerEndsAt} now={now} />
                                    )}
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                                    {slide.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-200 font-light">
                                    {slide.subtitle}
                                </p>
                                {slide.oldPrice && slide.newPrice && (
                                    <div className="flex items-end gap-3 py-2">
                                        <div className="text-3xl font-bold text-yellow-400">
                                            Rs. {slide.newPrice.toLocaleString()}
                                        </div>
                                        <div className="text-lg line-through text-gray-300">
                                            Rs. {slide.oldPrice.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-green-300 font-semibold">
                                            Save Rs. {(slide.oldPrice - slide.newPrice).toLocaleString()}
                                        </div>
                                    </div>
                                )}
                                {slide.monthly && (
                                    <div className="text-sm text-gray-200">Monthly: Rs. {slide.monthly.toLocaleString()}</div>
                                )}
                                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                                    {slide.cta}
                                </Button>
                            </div>
                            <div className="hidden md:block" />
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

function CountdownBadge({ endsAt, now }: { endsAt: Date; now: number }) {
    const diff = Math.max(0, endsAt.getTime() - now);
    const d = Math.floor(diff / (24 * 60 * 60 * 1000));
    const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const s = Math.floor((diff % (60 * 1000)) / 1000);
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur text-white text-xs font-semibold rounded-full">
            Offer Ends In
            <span className="font-mono">{d}d:{h}h:{m}m:{s}s</span>
        </span>
    );
}

"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
    {
        id: 1,
        title: "Rational iCombi Pro",
        subtitle: "The New Standard in Intelligence",
        discount: "Save Rs. 200,000",
        price: "Rs. 1,250,000",
        image: "bg-gradient-to-r from-[#0a0a0a] to-[#1f1f1f]",
        cta: "Shop Now",
    },
    {
        id: 2,
        title: "Commercial Bar Setup",
        subtitle: "Complete Solutions for Your Bar",
        discount: "Up to 20% OFF",
        price: "Packages from Rs. 500,000",
        image: "bg-gradient-to-r from-[#1f1f1f] to-[#333333]",
        cta: "View Packages",
    },
    {
        id: 3,
        title: "Tableware Collection",
        subtitle: "Elegant Designs for Fine Dining",
        discount: "Buy 1 Get 1 on Selected Items",
        price: "Starting Rs. 450",
        image: "bg-gradient-to-r from-[#000000] to-[#1f1f1f]",
        cta: "Explore Range",
    },
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-100">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className={`w-full h-full flex items-center justify-center ${slide.image} text-white`}>
                        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6 z-10">
                                <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full mb-2">
                                    {slide.discount}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                                    {slide.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-200 font-light">
                                    {slide.subtitle}
                                </p>
                                <div className="text-3xl font-bold text-yellow-400 py-2">
                                    {slide.price}
                                </div>
                                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                                    {slide.cta}
                                </Button>
                            </div>
                            <div className="hidden md:flex justify-center items-center opacity-30">
                                {/* Placeholder for product image */}
                                <div className="w-80 h-80 bg-white rounded-full blur-3xl"></div>
                            </div>
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

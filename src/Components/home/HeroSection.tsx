"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, Search, ChevronRight } from 'lucide-react';
import { Button } from "@/Components/ui/button";

const heroImages = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
    'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=80'
];

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Images */}
            {heroImages.map((img, index) => (
                <motion.div
                    key={img}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImage === index ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6 backdrop-blur-sm border border-orange-500/30">
              <Plane className="w-4 h-4" />
              Đối tác của 24+ hãng hàng không quốc tế
            </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Kiến tạo
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              trải nghiệm đáng nhớ
            </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
                    >
                        One step at a time. You'll get there.
                        <span className="block mt-2 text-gray-400">
              Mỗi khoảnh khắc đều là một câu chuyện. Hãy để chúng tôi đồng hành cùng bạn.
            </span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                        >
                            Đặt vé ngay
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                        >
                            Tư vấn miễn phí
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-16 grid grid-cols-3 gap-8"
                    >
                        {[
                            { value: '7+', label: 'Năm kinh nghiệm' },
                            { value: '24+', label: 'Đối tác hàng không' },
                            { value: '10K+', label: 'Khách hàng tin tưởng' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center sm:text-left">
                                <div className="text-3xl sm:text-4xl font-bold text-orange-400">{stat.value}</div>
                                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from "@/Components/ui/button";

const navItems = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Đối tác', href: '#partners' },
    { name: 'Liên hệ', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-3">
                            <img
                                src="/Logo.svg"
                                alt="Tachudu Logo"
                                className="w-20 h-20 object-contain"
                            />
                            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
        Tachudu
    </span>
                        </a>


                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                                        isScrolled ? 'text-gray-700' : 'text-white/90'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:02439351122"
                                className={`flex items-center gap-2 text-sm font-medium ${
                                    isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                            >
                                <Phone className="w-4 h-4" />
                                024.3935.1122
                            </a>
                            <Button
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6"
                            >
                                Đặt vé ngay
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-xl ${
                                isScrolled ? 'text-gray-700' : 'text-white'
                            }`}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
                        >
                            <div className="p-6 pt-20">
                                <nav className="space-y-4">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-100"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>

                                <div className="mt-8 space-y-4">
                                    <a
                                        href="tel:02439351122"
                                        className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Hotline 24/7</div>
                                            <div className="font-semibold text-gray-900">024.3935.1122</div>
                                        </div>
                                    </a>

                                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 rounded-xl">
                                        Đặt vé ngay
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
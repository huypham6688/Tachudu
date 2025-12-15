"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/Components/ui/button"

const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Giới thiệu", href: "#about" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Đối tác", href: "#partners" },
    { label: "Liên hệ", href: "#contact" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* ================= HEADER ================= */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/95 backdrop-blur shadow py-3"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative flex items-center h-16">
                        {/* Logo */}
                        <a
                            href="#home"
                            className="absolute left-0 flex items-center"
                        >
                            <img
                                src="/Logo.svg"
                                alt="Tachudu Logo"
                                className="w-20 h-20 object-contain scale-150 -translate-y-2 origin-left"
                            />
                        </a>

                        {/* Desktop Nav - CENTER */}
                        <nav className="hidden lg:flex mx-auto items-center gap-10">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`font-medium transition hover:text-orange-500 ${
                                        isScrolled ? "text-gray-700" : "text-white"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="hidden lg:flex absolute right-0 items-center gap-4">
                            <a
                                href="tel:02439351122"
                                className={`flex items-center gap-2 text-sm font-medium ${
                                    isScrolled ? "text-gray-700" : "text-white"
                                }`}
                            >
                                <Phone className="w-4 h-4" />
                                024.3935.1122
                            </a>

                            <Button className="rounded-full px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                Đặt vé ngay
                            </Button>
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className={`lg:hidden absolute right-0 p-2 ${
                                isScrolled ? "text-gray-700" : "text-white"
                            }`}
                        >
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white"
                        >
                            {/* Header mobile */}
                            <div className="flex items-center justify-between px-5 py-4 border-b">
                                <img src="/Logo.svg" className="h-10" />
                                <button onClick={() => setMobileMenuOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nav */}
                            <div className="px-6 py-6 space-y-6">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-lg font-medium text-gray-800"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            {/* Bottom */}
                            <div className="px-6 space-y-4">
                                <a
                                    href="tel:02439351122"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-orange-50"
                                >
                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Hotline 24/7</div>
                                        <div className="font-semibold text-gray-900">
                                            024.3935.1122
                                        </div>
                                    </div>
                                </a>

                                <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                    Đặt vé ngay
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

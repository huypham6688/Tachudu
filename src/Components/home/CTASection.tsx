import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Sẵn sàng cho
                            <span className="block">chuyến đi tiếp theo?</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Liên hệ ngay để nhận tư vấn miễn phí và báo giá tốt nhất từ đội ngũ chuyên gia của chúng tôi.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Đặt vé ngay
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                            >
                                Nhận báo giá
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right - Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <a
                            href="tel:02439351122"
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone className="w-7 h-7 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-white/70 text-sm">Hotline 24/7</div>
                                <div className="text-white text-xl font-bold">024.3935.1122</div>
                            </div>
                        </a>

                        <a
                            href="mailto:tachuduvn@gmail.com"
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="w-7 h-7 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-white/70 text-sm">Email hỗ trợ</div>
                                <div className="text-white text-xl font-bold">tachuduvn@gmail.com</div>
                            </div>
                        </a>

                        <a
                            href="https://zalo.me/02439351122"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-7 h-7 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-white/70 text-sm">Zalo / WhatsApp</div>
                                <div className="text-white text-xl font-bold">024.3935.1122</div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
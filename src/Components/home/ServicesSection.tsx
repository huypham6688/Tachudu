"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Plane, Hotel, Map, CalendarCheck,
    RefreshCcw, Smartphone, Luggage, FileText,
    Globe, Users, Sparkles
} from 'lucide-react';

const services = [
    { icon: Plane, title: 'Vé máy bay nội địa', desc: 'Đặt vé nhanh chóng với giá tốt nhất' },
    { icon: Globe, title: 'Vé máy bay quốc tế', desc: 'Kết nối 24+ hãng hàng không toàn cầu' },
    { icon: Hotel, title: 'Combo vé + khách sạn', desc: 'Tiết kiệm đến 40% chi phí' },
    { icon: Map, title: 'Tư vấn hành trình', desc: 'Lịch trình được thiết kế riêng' },
    { icon: RefreshCcw, title: 'Hoàn vé / Đổi vé', desc: 'Hỗ trợ nhanh chóng 24/7' },
    { icon: Smartphone, title: 'Check-in online', desc: 'Tiết kiệm thời gian tại sân bay' },
    { icon: Luggage, title: 'Hỗ trợ hành lý', desc: 'Tư vấn quy định hành lý chi tiết' },
    { icon: FileText, title: 'Dịch vụ Visa', desc: 'Hỗ trợ thủ tục visa toàn cầu' },
    { icon: CalendarCheck, title: 'Tour du lịch', desc: 'Tour trong nước và quốc tế' },
    { icon: Users, title: 'Tổ chức sự kiện', desc: 'MICE, Team building, Hội nghị' },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-24"
        >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Dịch vụ của chúng tôi
          </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Giải pháp du lịch
                        <span className="text-orange-500"> toàn diện</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Từ đặt vé máy bay đến tổ chức sự kiện quy mô lớn, chúng tôi mang đến dịch vụ chuyên nghiệp và tận tâm
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-orange-100 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-500">
                                    <service.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-500">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                        <Sparkles className="w-5 h-5" />
                        Liên hệ để được tư vấn chi tiết
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Calendar, Gift, Percent, ArrowRight } from 'lucide-react';
import { Button } from "@/Components/ui/button";

const promotions = [
    {
        title: 'Vé giá rẻ tháng này',
        desc: 'Giảm đến 30% cho các chuyến bay nội địa',
        icon: Tag,
        color: 'from-blue-500 to-blue-600',
        badge: 'HOT'
    },
    {
        title: 'Ưu đãi mùa hè',
        desc: 'Combo vé + khách sạn tiết kiệm 40%',
        icon: Calendar,
        color: 'from-orange-500 to-orange-600',
        badge: 'NEW'
    },
    {
        title: 'Doanh nghiệp',
        desc: 'Giá đặc biệt cho đối tác doanh nghiệp',
        icon: Gift,
        color: 'from-purple-500 to-purple-600',
        badge: 'B2B'
    },
    {
        title: 'Mã giảm giá',
        desc: 'Nhập TACHUDU10 giảm thêm 10%',
        icon: Percent,
        color: 'from-green-500 to-green-600',
        badge: 'CODE'
    }
];

export default function PromotionsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Ưu đãi đặc biệt
          </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Khuyến mãi
                        <span className="text-orange-500"> hấp dẫn</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Cập nhật liên tục những chương trình ưu đãi tốt nhất dành cho bạn
                    </p>
                </motion.div>

                {/* Promotions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {promotions.map((promo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative group cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full flex flex-col">
                                {/* Badge */}
                                <span className={`absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r ${promo.color} text-white text-xs font-bold shadow-lg`}>
                  {promo.badge}
                </span>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${promo.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <promo.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{promo.title}</h3>
                                <p className="text-gray-600 text-sm flex-grow">{promo.desc}</p>

                                {/* CTA */}
                                <div className="mt-4 flex items-center text-orange-500 font-medium text-sm group-hover:text-orange-600">
                                    Xem chi tiết
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 relative rounded-3xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700" />
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <div className="relative px-8 py-12 sm:px-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Đăng ký nhận thông báo giá rẻ
                            </h3>
                            <p className="text-white/80">
                                Nhận ngay thông báo khi có vé máy bay giảm giá đặc biệt
                            </p>
                        </div>
                        <Button
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 rounded-full shadow-xl whitespace-nowrap"
                        >
                            Đăng ký ngay
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
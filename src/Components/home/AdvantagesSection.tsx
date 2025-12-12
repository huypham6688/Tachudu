"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Clock, Shield, CreditCard,
    BarChart3, FileCheck, Receipt, Headphones
} from 'lucide-react';

const advantages = [
    {
        icon: Zap,
        title: 'Giá vé cạnh tranh',
        desc: 'Cập nhật theo thời gian thực, so sánh nhiều hãng bay cùng lúc'
    },
    {
        icon: Headphones,
        title: 'Hỗ trợ 24/7',
        desc: 'Đội ngũ tư vấn luôn sẵn sàng hỗ trợ mọi lúc mọi nơi'
    },
    {
        icon: Shield,
        title: 'Thanh toán an toàn',
        desc: 'Momo, chuyển khoản, thẻ tín dụng quốc tế đều được bảo mật'
    },
    {
        icon: Clock,
        title: 'Xuất vé nhanh chóng',
        desc: 'Cam kết xuất vé trong thời gian ngắn nhất'
    },
    {
        icon: BarChart3,
        title: 'So sánh giá thông minh',
        desc: 'Công cụ so sánh giá từ nhiều hãng hàng không'
    },
    {
        icon: Receipt,
        title: 'Hóa đơn VAT đầy đủ',
        desc: 'Cung cấp hóa đơn chứng từ hợp lệ cho doanh nghiệp'
    },
    {
        icon: FileCheck,
        title: 'Đội ngũ chuyên nghiệp',
        desc: 'Nhân viên giàu kinh nghiệm, am hiểu thị trường'
    },
    {
        icon: CreditCard,
        title: 'Tiết kiệm chi phí',
        desc: 'Giải pháp tối ưu nguồn lực cho khách hàng doanh nghiệp'
    }
];

export default function AdvantagesSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Tại sao chọn chúng tôi
          </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Lợi thế
                        <span className="text-orange-500"> vượt trội</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Cam kết mang đến dịch vụ chất lượng cao với nhiều ưu đãi đặc biệt
                    </p>
                </motion.div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-orange-200">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
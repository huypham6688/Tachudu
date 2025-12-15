"use client";

import React from 'react';
import { motion } from 'framer-motion';

const airlines = [
    'Vietnam Airlines', 'Vietjet', 'Bamboo Airways', 'AirAsia', 'Korean Air',
    'Qantas', 'China Southern', 'Japan Airlines', 'Air France', 'Singapore Airlines',
    'Emirates', 'Cathay Pacific', 'Turkish Airlines', 'Eva Air', 'Lufthansa',
    'British Airways', 'Delta Airlines', 'American Airlines', 'Air Canada', 'Asiana Airlines'
];

const clients = [
    { name: 'BIDV', color: 'from-blue-500 to-blue-600' },
    { name: 'Vietinbank', color: 'from-red-500 to-red-600' },
    { name: 'BIC', color: 'from-orange-500 to-orange-600' },
    { name: 'Mobifone', color: 'from-blue-400 to-cyan-500' },
    { name: 'Agribank', color: 'from-green-500 to-green-600' },
    { name: 'Crystal Bay', color: 'from-purple-500 to-purple-600' },
    { name: 'TTHNGQ', color: 'from-amber-500 to-amber-600' },
    { name: 'Arysta', color: 'from-teal-500 to-teal-600' },
];

export default function PartnersSection() {
    return (
        <section
        id={"partners"}
            className="py-24 bg-gray-900 overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Đối tác tin cậy
          </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Kết nối
                        <span className="text-orange-400"> toàn cầu</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Hợp tác với hơn 24 hãng hàng không quốc tế và phục vụ nhiều doanh nghiệp lớn
                    </p>
                </motion.div>

                {/* Airlines Marquee */}
                <div className="mb-16">
                    <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
                        Đối tác hàng không
                    </h3>
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

                        <div className="flex overflow-hidden">
                            <motion.div
                                animate={{ x: [0, -50 * airlines.length] }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="flex gap-8"
                            >
                                {[...airlines, ...airlines].map((airline, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <span className="text-gray-300 whitespace-nowrap font-medium">{airline}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Client Logos */}
                <div>
                    <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
                        Khách hàng doanh nghiệp
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className={`aspect-square rounded-2xl bg-gradient-to-br ${client.color} p-[1px]`}
                            >
                                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center p-4">
                                    <span className="text-white font-bold text-center text-sm">{client.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        name: 'Nguyễn Văn A',
        role: 'Giám đốc Marketing - BIDV',
        content: 'Tachudu đã hỗ trợ chúng tôi tổ chức thành công nhiều chuyến công tác và sự kiện quan trọng. Dịch vụ chuyên nghiệp, đội ngũ tận tâm và luôn đáp ứng mọi yêu cầu một cách nhanh chóng.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
        name: 'Trần Thị B',
        role: 'HR Manager - Mobifone',
        content: 'Team building do Tachudu tổ chức thực sự ấn tượng! Chương trình sáng tạo, phù hợp với văn hóa công ty và mang lại trải nghiệm tuyệt vời cho nhân viên. Sẽ tiếp tục hợp tác lâu dài.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
        name: 'Lê Văn C',
        role: 'CEO - Startup Tech',
        content: 'Dịch vụ đặt vé máy bay nhanh chóng, giá cả hợp lý. Đặc biệt khi có sự cố chuyến bay bị hủy, đội ngũ Tachudu đã hỗ trợ đổi vé khẩn cấp rất chuyên nghiệp. Đánh giá 5 sao!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
            Khách hàng nói gì
          </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Đánh giá từ
                        <span className="text-orange-500"> khách hàng</span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                                <Quote className="w-5 h-5 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                                "{testimonials[current].content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[current].image}
                                    alt={testimonials[current].name}
                                    className="w-14 h-14 rounded-full object-cover ring-4 ring-orange-100"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
                                    <div className="text-sm text-gray-500">{testimonials[current].role}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prev}
                            className="rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        current === index
                                            ? 'w-8 bg-orange-500'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={next}
                            className="rounded-full border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Heart, Lightbulb } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Thấu hiểu văn hóa',
        desc: 'Văn hóa là linh hồn của mọi chuyến đi. Chúng tôi kết nối và tôn vinh giá trị văn hóa của từng địa phương.'
    },
    {
        icon: Lightbulb,
        title: 'Sáng tạo phù hợp',
        desc: 'Trọng tâm vào những sáng tạo mang tính đột phá và độc đáo, tạo ra sự khác biệt cho từng dự án.'
    },
    {
        icon: Award,
        title: 'Giải pháp tùy chỉnh',
        desc: 'Xây dựng giải pháp "may đo" chính xác theo yêu cầu, phản ánh đúng giá trị thương hiệu khách hàng.'
    }
];

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
                                alt="Travel Experience"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">2018</div>
                                    <div className="text-sm text-gray-500">Năm thành lập</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                Không ngừng đổi mới và phát triển trong lĩnh vực du lịch và sự kiện
                            </p>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10" />
                        <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-orange-200 rounded-full -z-10" />
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
              Về chúng tôi
            </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Đồng hành kiến tạo
                            <span className="text-orange-500"> kỷ niệm đẹp</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Mỗi khoảnh khắc trong cuộc sống đều có sức mạnh kể một câu chuyện. Tại Tachudu,
                            chúng tôi không chỉ tổ chức các chuyến du lịch hay sự kiện – chúng tôi kiến tạo
                            nên những trải nghiệm độc đáo, nơi cảm xúc và văn hóa gặp nhau để tạo nên
                            những kỷ niệm không thể nào phai mờ.
                        </p>

                        {/* Values */}
                        <div className="space-y-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                                        <p className="text-sm text-gray-600">{value.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
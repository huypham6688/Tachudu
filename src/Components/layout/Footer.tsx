import React from 'react';
import { motion } from 'framer-motion';
import {
    MapPin, Phone, Mail, Clock,
    Facebook, Youtube, MessageCircle, Send
} from 'lucide-react';

const footerLinks = {
    services: [
        'Vé máy bay nội địa',
        'Vé máy bay quốc tế',
        'Combo vé + khách sạn',
        'Tour du lịch',
        'Tổ chức sự kiện'
    ],
    policies: [
        'Chính sách hoàn vé',
        'Điều khoản sử dụng',
        'Chính sách thanh toán',
        'Bảo mật thông tin',
        'Bảo hành dịch vụ'
    ]
};

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: MessageCircle, href: 'https://zalo.me/02439351122', label: 'Zalo' },
    { icon: Send, href: 'https://t.me/tachudu', label: 'Telegram' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-bold text-2xl">
                                T
                            </div>
                            <div>
                                <span className="font-bold text-xl block">Tachudu</span>
                                <span className="text-xs text-gray-400">Travel & Events</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            One step at a time. You'll get there.
                            <br />
                            Kiến tạo những trải nghiệm vượt xa mong đợi.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Dịch vụ</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Chính sách</h4>
                        <ul className="space-y-3">
                            {footerLinks.policies.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Liên hệ</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                  Số 4 ngõ 230/31 Phố Định Công Thượng, Phường Định Công, Quận Hoàng Mai, Hà Nội
                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                <a href="tel:02439351122" className="text-gray-400 hover:text-orange-400 text-sm">
                                    024.3935.1122
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                <a href="mailto:tachuduvn@gmail.com" className="text-gray-400 hover:text-orange-400 text-sm">
                                    tachuduvn@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                  T2-T6: 8h-17h30 | T7: 8h-12h
                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            © 2024 CÔNG TY TNHH DU LỊCH VÀ SỰ KIỆN TACHUDU. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Threads: <a href="https://threads.net/@tachudu.vn" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">@tachudu.vn</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
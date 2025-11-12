import React, { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <footer className="bg-gray-800 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Mapa */}
                    <div className="bg-gray-700 rounded-lg overflow-hidden h-64">
                        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <MapPin className="w-12 h-12 text-red-500" />
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Entre em contato</h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                            />
                            <textarea
                                placeholder="Mensagem"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
                    © 2025 Clan Educação. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
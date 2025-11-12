import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../componentes/navegador/Navegador';
import Footer from '../componentes/footer/Footer';

const MemorialApp = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Conteúdo Principal */}
            <main className="bg-white">
                {/* Seção Hero */}
                <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        O tempo passa,<br />
                        mas o amor permanece
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        um refúgio para relembrar e sentir.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition">
                        Criar As Memórias
                    </button>
                </section>

                {/* Card do Memorial */}
                <section className="max-w-2xl mx-auto px-6 py-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                Luiz Alberto da Silva Dias
                            </h2>
                            <p className="text-gray-600">1948-2025</p>
                            <p className="text-xs text-gray-500 mt-2">
                                Uma vida repleta de amor, sorrisos e momentos inesquecíveis
                            </p>
                        </div>

                        {/* Grid de Fotos Placeholder */}
                        <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition"
                                >
                                    <span className="text-gray-600 text-sm font-medium">Foto {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção "Como Funciona" */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Mockup do celular */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-64 h-96 bg-gradient-to-b from-blue-400 via-green-400 to-green-600 rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl"></div>
                                </div>
                            </div>
                        </div>

                        {/* Cards de Recursos */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                Entenda como funciona
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Etiam laoreet nunc eu ex facilisis, eu accumsan arcu hendrerit.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                                        <Phone className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base text-gray-900 mb-2">
                                            Escolha um modelo memorial
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Personalize com fotos, vídeos e mensagens especiais que celebram a vida.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                                        <Mail className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base text-gray-900 mb-2">
                                            Compartilhe com familiares
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Convide amigos e familiares para colaborar com suas próprias memórias.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                                        <MapPin className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base text-gray-900 mb-2">
                                            Reacenda suas emoções
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Visite sempre que sentir saudades e reviva memórias preciosas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MemorialApp;
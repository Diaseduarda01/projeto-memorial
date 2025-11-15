import React, { useState, useEffect } from "react";
import { api } from '../http/axios-instance';
import { Smartphone, Users, Heart } from "lucide-react";

export default function MemorialPage() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#F6F7FB' }}>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: '#4068F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{ 
                color: '#ffffff',
                backgroundColor: 'transparent',
                border: 'none',
                padding: '8px 16px'
              }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('historia')}
              className="font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{ 
                color: '#ffffff',
                backgroundColor: 'transparent',
                border: 'none',
                padding: '8px 16px'
              }}
            >
              História
            </button>
            <button
              onClick={() => scrollToSection('memorias')}
              className="font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{ 
                color: '#ffffff',
                backgroundColor: 'transparent',
                border: 'none',
                padding: '8px 16px'
              }}
            >
              Memórias
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: '#4068F8' }}>
            O tempo passa,<br />
            mas o amor permanece
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-light" style={{ color: '#1B2A59' }}>
            um refúgio para relembrar e sentir.
          </p>
          <button
            onClick={() => scrollToSection('memorias')}
            className="text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#4068F8' }}
          >
            Veja As Memórias
          </button>
        </div>
      </header>

      {/* CARD MEMORIAL */}
      <section id="historia" className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ borderColor: '#DDE3FF', borderWidth: '2px' }}>
          <div className="p-8 sm:p-12 text-white text-center" style={{ backgroundColor: '#4068F8' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Luiz Alberto da Silva Dias
            </h2>
            <p className="text-lg sm:text-xl text-white/90 font-light">
              1998–2024
            </p>
          </div>

          <div className="p-6 sm:p-10" style={{ backgroundColor: '#DDE3FF' }}>
            <p className="text-center text-lg sm:text-xl italic mb-8 sm:mb-12 font-light leading-relaxed" style={{ color: '#1B2A59' }}>
              ""Uma vida repleta de amor, risos e momentos preciosos"
            </p>

            {/* SEÇÃO MEMÓRIAS */}
            <div id="memorias" className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
              {[
                "../public/imagens/foto-1.png",
                "../public/imagens/foto-2.jpg",
                "../public/imagens/foto-3.jpg",
                "../public/imagens/foto-4.jpg",
                "../public/imagens/foto-5.jpg",
                "../public/imagens/foto-6.jpg",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <img
                    src={src}
                    alt={`Foto ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#1B2A59' }}>
            Entenda como funciona
          </h2>
          <p className="text-base sm:text-lg font-light" style={{ color: '#1B2A59' }}>
            Dê algo feito com carinho para quem você ama
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {[
            {
              icon: <Smartphone className="w-12 h-12 sm:w-14 sm:h-14" />,
              title: "Funciona em qualquer dispositivo",
              desc: "Sem necessidade de baixar aplicativos. Familiares e amigos podem compartilhar suas lembranças diretamente do navegador do celular"
            },
            {
              icon: <Users className="w-12 h-12 sm:w-14 sm:h-14" />,
              title: "Aprovação pela família",
              desc: "Cada foto e vídeo é revisado pela família antes de entrar na sessão de memórias, garantindo que o conteúdo seja especial e adequado para a homenagem."
            },
            {
              icon: <Heart className="w-12 h-12 sm:w-14 sm:h-14" />,
              title: "Recordações que se unem",
              desc: "Conforme as lembranças são aprovadas, elas aparecem automaticamente na sessão. Acompanhe a homenagem crescer em tempo real, com as contribuições de todos."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ borderColor: '#DDE3FF', borderWidth: '1px' }}
            >
              <div className="inline-flex p-4 rounded-2xl text-white mb-5 shadow-lg" style={{ backgroundColor: '#4068F8' }}>
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#1B2A59' }}>
                {item.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#B8C0CC' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white mt-16 sm:mt-20" style={{ backgroundColor: '#1B2A59' }}>
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Informações</h3>
          <p className="text-sm sm:text-base text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Projeto feito em homenagem a uma grande pessoa que viverá para sempre
            em nossas memórias.
          </p>
          <div className="pt-6" style={{ borderTopColor: '#4068F8', borderTopWidth: '1px' }}>
            <p className="text-xs sm:text-sm text-white/60">
              © 2025 Dias Eduardo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
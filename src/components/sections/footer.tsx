import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, HeartPulse } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                CuraOdonto
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Referência em odontologia moderna e humanizada. Transformando vidas através de sorrisos saudáveis e radiantes.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="hover:text-primary transition-colors text-sm">Início</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors text-sm">Serviços</Link></li>
              <li><Link href="#galeria" className="hover:text-primary transition-colors text-sm">Galeria</Link></li>
              <li><Link href="#depoimentos" className="hover:text-primary transition-colors text-sm">Depoimentos</Link></li>
              <li><Link href="#agendar" className="hover:text-primary transition-colors text-sm">Agendamento</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(11) 99999-9999(site de exemplo contato não real)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contato@curaodonto.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Horários</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-white">Segunda - Sexta</p>
                  <p>08:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-white">Sábado</p>
                  <p>08:00 - 12:00</p>
                </div>
              </li>
              <li className="text-sm italic text-slate-500 mt-2">
                * Domingo: Fechado
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 CuraOdonto - Excelência e Cuidado.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

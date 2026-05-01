import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Users, 
  Microscope,
  ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Clínica Geral',
    description: 'Diagnósticos, limpezas e restaurações para manter seu sorriso sempre saudável.',
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Implantes Dentários',
    description: 'Recupere a funcionalidade e estética do seu sorriso com tecnologia de ponta.',
    icon: Microscope,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos modernos e discretos para alinhar seus dentes com conforto.',
    icon: Activity,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Estética Dental',
    description: 'Clareamento e facetas de porcelana para transformar completamente o seu sorriso.',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Odontopediatria',
    description: 'Cuidado especial e lúdico para os primeiros sorrisos dos seus filhos.',
    icon: Users,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Prevenção',
    description: 'Check-ups regulares para evitar problemas futuros e manter a saúde em dia.',
    icon: ShieldCheck,
    color: 'bg-teal-100 text-teal-600',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold text-lg mb-2">Nossos Serviços</h2>
          <h3 className="text-4xl font-bold mb-6">Tratamentos Completos para Você</h3>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços odontológicos, utilizando as técnicas mais avançadas para garantir resultados excepcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none bg-slate-50/50 hover:-translate-y-2">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${service.color}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="flex items-center text-sm font-semibold text-primary group/btn">
                  Saiba mais 
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
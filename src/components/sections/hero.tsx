import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShieldCheck, HeartPulse, Activity } from 'lucide-react';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 flex flex-col gap-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold w-fit">
            <Activity className="w-4 h-4" />
            Excelência em Odontologia
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
            Cuidando da sua <span className="text-primary">Saúde Bucal</span> com Tecnologia.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Em CuraOdonto, combinamos precisão técnica com um atendimento acolhedor para proporcionar a melhor experiência odontológica para você e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
              Agendar Avaliação
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
              Conheça Nossos Serviços
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Tecnologia Segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-secondary">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Atendimento Humanizado</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block animate-in fade-in zoom-in duration-1000">
          <div className="relative w-full aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={heroImg?.imageUrl || 'https://picsum.photos/seed/cura1/800/800'}
                alt="Modern Clinic"
                fill
                className="object-cover"
                priority
                data-ai-hint="dental office"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                <Activity />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Pacientes Atendidos</p>
                <p className="text-xl font-bold">5.000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

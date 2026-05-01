"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Paciente de Ortodontia',
    content: 'O atendimento na CuraOdonto superou minhas expectativas. Toda a equipe é extremamente atenciosa e o resultado do meu tratamento foi impecável.',
    avatar: 'https://picsum.photos/seed/cura-t1/100/100'
  },
  {
    name: 'Ricardo Oliveira',
    role: 'Paciente de Implante',
    content: 'Tecnologia de ponta e um ambiente muito acolhedor. Recuperei meu sorriso e minha confiança. Recomendo fortemente para todos!',
    avatar: 'https://picsum.photos/seed/cura-t2/100/100'
  },
  {
    name: 'Fernanda Lima',
    role: 'Paciente de Estética',
    content: 'Fiz facetas de resina e o resultado ficou muito natural. O Dr. foi muito detalhista e paciente em explicar cada etapa.',
    avatar: 'https://picsum.photos/seed/cura-t3/100/100'
  }
];

export function GalleryTestimonials() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="galeria" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Gallery Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary font-semibold text-lg mb-2">Nossa Clínica</h2>
            <h3 className="text-4xl font-bold mb-8">Conheça nosso espaço</h3>
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {galleryImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                        data-ai-hint={img.imageHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-6 justify-center lg:justify-start">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Testimonials Side */}
          <div id="depoimentos" className="w-full lg:w-1/2">
            <h2 className="text-secondary font-semibold text-lg mb-2">Depoimentos</h2>
            <h3 className="text-4xl font-bold mb-8">O que nossos pacientes dizem</h3>
            
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-md bg-white rounded-3xl">
                      <CardContent className="p-10">
                        <Quote className="w-12 h-12 text-primary/20 mb-6" />
                        <p className="text-lg text-muted-foreground italic mb-8 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                          </div>
                          <div className="ml-auto flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => (
                              <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 mt-6 justify-center lg:justify-start">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { GalleryTestimonials } from '@/components/sections/gallery-testimonials';
import { AppointmentForm } from '@/components/sections/appointment-form';
import { Footer } from '@/components/sections/footer';
import { DentalSupportChat } from '@/components/sections/dental-ai-assistant';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <GalleryTestimonials />
      <AppointmentForm />
      <Footer />
      <DentalSupportChat />
      <Toaster />
    </main>
  );
}

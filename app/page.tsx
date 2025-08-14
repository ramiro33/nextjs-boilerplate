import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import PricingCard from '@/components/PricingCard';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Hero title="Hosting de Minecraft y VPN Profesional" subtitle="Servicios confiables para gamers y usuarios que buscan privacidad." />
      </motion.div>
      <FeatureGrid features={[
        { title: 'Hosting MC', desc: 'Servidores con slots ilimitados y protección DDoS.' },
        { title: 'VPN Segura', desc: 'Servidores globales con política de no registros.' },
        { title: 'Soporte 24/7', desc: 'Asistencia técnica en cualquier momento.' },
        { title: 'Alta Velocidad', desc: 'Servidores optimizados para baja latencia.' },
        // Agrega más características aquí
      ]} />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <PricingCard plan="Básico MC" price="$5/mes" features={['1GB RAM', 'Soporte para mods', 'Backups diarios']} />
        <PricingCard plan="Pro VPN" price="$3/mes" features={['Ancho de banda ilimitado', 'Encriptación AES-256']} />
        <PricingCard plan="Premium MC" price="$10/mes" features={['4GB RAM', 'Soporte premium']} />
      </section>
      <TestimonialSlider testimonials={[
        { quote: '¡El mejor hosting para mi servidor de Minecraft!', author: 'Jugador1' },
        { quote: 'La VPN es súper rápida y fácil de usar.', author: 'Usuario2' },
        // Agrega más testimonios
      ]} />
    </main>
  );
}

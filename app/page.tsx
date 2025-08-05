'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DepartmentsSection from '../components/DepartmentsSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <GallerySection />
      <TestimonialsSection />
      <QuoteRequestForm />
      <ContactSection />
      <Footer />
    </main>
  );
}
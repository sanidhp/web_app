"use client";
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import AIpart from '@/components/AIpart'
import Slide from '@/components/Slide'
import SavingSection from '@/components/SavingSection';
import MoreAsset from '@/components/MoreAsset';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import FlagSection from '@/components/FlagSection';
import SavePlanet from '@/components/SavePlanet';
import OurStory from '@/components/OurStory';
import ContactForm from '@/components/ContactForm';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      <AIpart/>
      <Slide/>
      <SavingSection/>
      <MoreAsset/>
      <Clients/>
      <FlagSection/>
      <SavePlanet/>
      <OurStory/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

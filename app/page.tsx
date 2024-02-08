import Hero  from './src/components/Hero';
import Navbar from './src/components/Navbar';
import Steps from './src/components/Steps';
import Footer from './src/components/Footer';
import Experience from './src/components/Experience';
import MyProjects from './src/components/Projects';
import ContactMe from './src/components/ContactMe';
import Stats from './src/components/Stats';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <Toaster position='top-right' />
      <Navbar />
      <Hero />
      <Steps />
      <Experience/>
      <MyProjects />
      <Stats />
      <ContactMe />
      <Footer />
    </>
  );
}

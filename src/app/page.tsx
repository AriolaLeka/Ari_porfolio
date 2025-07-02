import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import InteractiveTimeline from './components/InteractiveTimeline';
import ProjectGallery from './components/ProjectGallery';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import ParticleBackground from './components/ParticleBackground';
import FloatingActionButton from './components/FloatingActionButton';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <ThemeToggle />
      <FloatingActionButton />
      <Navbar />
      <Hero />
      <Skills />
      <InteractiveTimeline />
      <ProjectGallery />
      <Credentials />
      <Contact />
    </main>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import {
  ChevronRight,
  Download,
  Headphones,
  Info,
  Menu,
  PlayCircle,
  Wifi,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="text-2xl font-bold text-red-600">
                JMM Sermon
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#performance"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                Performance
              </Link>
              <Link
                href="#download"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                Download
              </Link>
            </nav>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 pt-24 pb-8">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#performance"
                className="text-xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Performance
              </Link>
              <Link
                href="#download"
                className="text-xl text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </nav>
          </div>
        </div>
      )}

      <main>
        <section className="pt-24 pb-12 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 md:pr-12"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Experience Sermons Like Never Before
                </h1>
                <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
                  JMM Sermon brings you inspiring messages from Harvest Family
                  Church, anytime, anywhere.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Link href="#download">
                    Listen Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                className="md:w-1/2 mt-12 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="JMM Sermon App Screenshot"
                  width={300}
                  height={600}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section
          id="features"
          className="py-16 bg-gray-50 dark:bg-gray-800"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Rich Sermon Library",
                  description:
                    "Access a vast collection of inspiring sermons from Harvest Family Church.",
                  icon: <Headphones className="h-8 w-8 text-red-600" />,
                },
                {
                  title: "Stream or Download",
                  description:
                    "Listen online or save sermons for offline playback.",
                  icon: <Wifi className="h-8 w-8 text-red-600" />,
                },
                {
                  title: "Background Playback",
                  description:
                    "Continue listening while using other apps or when your screen is locked.",
                  icon: <PlayCircle className="h-8 w-8 text-red-600" />,
                },
                {
                  title: "Detailed Sermon Info",
                  description:
                    "View thumbnails, speaker details, and comprehensive sermon information.",
                  icon: <Info className="h-8 w-8 text-red-600" />,
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="performance"
          className="py-16"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enhanced Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Faster Loading Times
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experience lightning-fast app launch and sermon loading for
                    seamless listening.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Light and Dark Mode
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enjoy comfortable viewing with automatic light and dark mode
                    switching.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="download"
          className="py-16 bg-red-600 text-white"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Download JMM Sermon Today
            </h2>
            <p className="text-xl mb-8">
              Start your spiritual journey with Harvest Family Church sermons.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="#">
                <Download className="mr-2 h-4 w-4" />
                Get it on Google Play
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="#" className="text-2xl font-bold">
                JMM Sermon
              </Link>
              <p className="mt-2 text-sm text-gray-400">
                © 2024 Harvest Family Church. All rights reserved.
              </p>
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

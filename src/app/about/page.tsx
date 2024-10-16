"use client";
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Menu, X, ChevronDown, Users, Sparkles, Target } from "lucide-react"

import lenislogo from "../../img/LeniS Logo.png"
import placeholder from "../../img/placeholder.svg"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeValue, setActiveValue] = useState(null)

  const companyValues = [
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Kundenorientierung",
      description: "Wir stellen unsere Kunden an erste Stelle und streben stets danach, ihre Erwartungen zu übertreffen und exzellenten Service zu bieten."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-green-600" />,
      title: "Exzellenz",
      description: "Wir verpflichten uns zu Exzellenz in allen Aspekten unserer Arbeit, von den verwendeten Produkten bis hin zu den Ergebnissen, die wir liefern."
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Nachhaltigkeit",
      description: "Wir priorisieren umweltfreundliche Praktiken und Produkte, um unsere Umweltauswirkungen zu minimieren und eine grünere Zukunft zu fördern."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">LeniS</span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Menü öffnen</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/" className="text-base font-medium text-gray-700 hover:text-green-500">
                Startseite
              </Link>
              <Link href="/services" className="text-base font-medium text-gray-700 hover:text-green-500">
                Dienstleistungen
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-700 hover:text-green-500">
                Über uns
              </Link>
              <Link href="/gallery" className="text-base font-medium text-gray-700 hover:text-green-500">
                Galerie
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-green-500">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'fixed inset-0 z-40 overflow-y-auto' : 'hidden'} md:hidden`}>
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white shadow-xl overflow-y-scroll">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">LeniS</span>
            </Link>
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menü schließen</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="pt-2 pb-4 space-y-1">
              <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">
                Startseite
              </Link>
              <Link href="/services" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">
                Dienstleistungen
              </Link>
              <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">
                Über uns
              </Link>
              <Link href="/gallery" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">
                Galerie
              </Link>
              <Link href="/contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Über LeniS</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Entdecken Sie unsere Geschichte, Mission und die Werte, die uns antreiben, außergewöhnliche Reinigungsdienste zu bieten.
          </p>
        </div>

        {/* Company Mission and Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Unsere Mission und Werte</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src={lenislogo}
                alt="Happy Clients"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg text-gray-700">
              Bei LeniS ist es unsere Mission, Räume zu transformieren und Leben durch unsere professionellen Reinigungsdienste zu verbessern. Wir setzen uns dafür ein, sauberere, gesündere und komfortablere Umgebungen für unsere Kunden zu schaffen.
              </p>
              <div className="space-y-4">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                  onClick={() => setActiveValue(activeValue === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 rounded-full p-2">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                        activeValue === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  {activeValue === index && (
                    <p className="mt-2 text-gray-600">{value.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Call to Action */}
        <div className="mt-24 bg-green-50 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Bereit, den LeniS-Unterschied zu erleben?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Schließen Sie sich unseren zufriedenen Kunden an und entdecken Sie, wie wir Ihren Raum verwandeln können.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Loslegen
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2024 LeniS, Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
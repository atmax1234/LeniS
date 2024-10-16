"use client";
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Menu, X, ChevronDown } from "lucide-react"

import placeholder from "../../img/placeholder.svg"
import gartenpflege from "../../img/Gartenpflege.png"
import treppenhausreinigung from "../../img/treppenhausreinigung.png"
import winterdienst from "../../img/winterdienst.png"

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const services = [
    {
      title: "Gartenpflege",
      description: "Halten Sie Ihren Rasen üppig, grün und gesund mit unserer fachkundigen Pflege und Wartung.",
      details: "Unser Gartenpflegeservice stellt sicher, dass Ihre Außenanlagen gepflegt, ansprechend und gesund bleiben. Wir bieten professionelle Dienstleistungen wie Heckenschnitt, Pflanzung, Umpflanzung, Dekultivierung und das Sammeln von Laub an. Unser Team verwendet moderne Werkzeuge und Techniken, um den Garten optimal zu pflegen und eine attraktive, saubere Umgebung zu schaffen. Besonders achten wir auf eine präzise Pflege der Pflanzen und Sträucher, damit Ihr Garten in voller Pracht erblüht und ein angenehmer Ort für Sie und Ihre Besucher ist.",
      image: gartenpflege,
    },
    {
      title: "Treppenhausreinigung",
      description: "Sorgen Sie für eine saubere und sichere Umgebung mit unseren gründlichen Treppenhausreinigungsdiensten.",
      details: "Unser Treppenhausreinigungsservice sorgt dafür, dass die Treppenhäuser Ihres Gebäudes sauber, hygienisch und sicher bleiben. Wir verwenden professionelle Reinigungsmittel und -geräte, um Schmutz, Dreck und potenzielle Rutschgefahren zu beseitigen. Unser Team legt besonderen Wert auf stark beanspruchte Bereiche wie Handläufe und Türklinken, um eine gründliche Reinigung zu gewährleisten, die eine gesunde Umgebung für alle Gebäudebewohner fördert.",
      image: treppenhausreinigung,
    },
    {
      title: "Winterdienste",
      description: "Umfassende Winterwartung, um Ihr Grundstück in den kalten Monaten sicher und zugänglich zu halten.",
      details: "Unsere Winterdienste umfassen Schneeräumung und Enteisung. Wir verwenden effiziente Schneeräumgeräte und umweltfreundliche Enteisungsprodukte, um Ihre Gehwege, Zufahrten und Parkplätze sicher und zugänglich zu halten.",
      image: winterdienst,
    },
  ]

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title)
  }

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

      {/* Services Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Unsere Dienstleistungen</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Entdecken Sie unser Angebot an professionellen Reinigungs- und Wartungsdiensten, die darauf ausgelegt sind, Ihr Grundstück in einwandfreiem Zustand zu halten.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service) => (
            <div key={service.title} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer" onClick={() => toggleService(service.title)}>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${expandedService === service.title ? 'rotate-180' : ''}`} />
              </div>
              {expandedService === service.title && (
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                      <p className="text-sm text-gray-700">{service.details}</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
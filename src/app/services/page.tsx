"use client";
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react" // Removed Leaf, Menu, X
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer";

import gartenpflege from "../../img/Gartenpflege.png"
import treppenhausreinigung from "../../img/treppenhausreinigung.png"
import winterdienst from "../../img/winterdienst.png"

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null) // Removed mobileMenuOpen

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
      <Header /> {/* Use the Header component */}

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
      <Footer />
    </div>
  )
}
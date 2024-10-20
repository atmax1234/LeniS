"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Menu, X } from "lucide-react";
import heroimg from "../img/heroimage.png";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  LeniS
                </span>
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
              <Link
                href="/"
                className="text-base font-medium text-gray-700 hover:text-green-500"
              >
                Startseite
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-gray-700 hover:text-green-500"
              >
                Dienstleistungen
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-green-500"
              >
                Über uns
              </Link>
              <Link
                href="/gallery"
                className="text-base font-medium text-gray-700 hover:text-green-500"
              >
                Galerie
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-700 hover:text-green-500"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? "fixed inset-0 z-40 overflow-y-auto" : "hidden"
        } md:hidden`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white shadow-xl overflow-y-scroll">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                LeniS
              </span>
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
              <Link
                href="/"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
              >
                Startseite
              </Link>
              <Link
                href="/services"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
              >
                Dienstleistungen
              </Link>
              <Link
                href="/about"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
              >
                Über uns
              </Link>
              <Link
                href="/gallery"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
              >
                Galerie
              </Link>
              <Link
                href="/contact"
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Verwandeln Sie Ihr</span>{" "}
                  <span className="block text-green-600 xl:inline">
                    Wohnumfeld noch heute
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Erleben Sie den Komfort eines professionell gereinigten und
                  gepflegten Wohnbereichs. Unser Expertenteam ist bereit,
                  Sauberkeit und Ordnung in Ihr Zuhause zu bringen.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/gallery"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Unsere Arbeit ansehen
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={heroimg}
            alt="Clean living space"
            priority={true}
            width={1920}
            height={1080}
          />
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Unsere Dienstleistungen
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Professionelle Reinigungsdienstleistungen
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Wir bieten eine Vielzahl von Dienstleistungen an, um Ihr Zuhause
              das ganze Jahr über sauber, komfortabel und gut gepflegt zu
              halten.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Rasenpflege",
                  description:
                    "Halten Sie Ihren Rasen üppig, grün und gesund mit unserer fachkundigen Pflege und Wartung.",
                  icon: (
                    <svg
                      className="h-12 w-12 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Treppenhausreinigung",
                  description:
                    "Sorgen Sie für eine saubere und sichere Umgebung mit unseren gründlichen Treppenhausreinigungsdiensten.",
                  icon: (
                    <svg
                      className="h-12 w-12 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Winterdienste",
                  description:
                    "Umfassende Winterwartung, um Ihr Grundstück in den kalten Monaten sicher und zugänglich zu halten.",
                  icon: (
                    <svg
                      className="h-12 w-12 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                },
              ].map((service) => (
                <div key={service.title} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                          {service.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/services"
                          className="text-base font-medium text-green-600 hover:text-green-500"
                        >
                          Mehr erfahren &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

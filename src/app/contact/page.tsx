"use client";
import React, { useState } from "react"
import Link from "next/link"
import { Leaf, Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react"

import { sendContactForm } from "../lib/api"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await sendContactForm(formValues)
      
      setFormValues({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Kontakt</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Kontaktieren Sie uns bei Fragen oder um einen Termin zu vereinbaren.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Senden Sie uns eine Nachricht</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600">Ihre Nachricht wurde erfolgreich gesendet!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600">Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-gray-600 font-semibold">+49 1577 1645378</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-gray-600 font-semibold">kontakt@lenis-pro.de</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-gray-600 font-semibold">123 Cleaning St, City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-gray-600 font-semibold">Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Warum LeniS wählen?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Professionelles und erfahrenes Personal</li>
                <li>Umweltfreundliche Reinigungsprodukte</li>
                <li>Flexible Terminoptionen</li>
                <li>100% Zufriedenheitsgarantie</li>
                <li>Wettbewerbsfähige Preise</li>
              </ul>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+4915771645378"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Phone className="h-5 w-5 mr-2" />
                Rufen Sie uns jetzt an
              </a>
              <a
                href="mailto:kontakt@lenis-pro.de"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Mail className="h-5 w-5 mr-2" />
                Schreiben Sie uns eine E-Mail
              </a>
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
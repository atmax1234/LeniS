"use client";
import React, { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react" // Removed Leaf, Menu, X
import Header from "../components/Header"; // Import the Header component

import { sendContactForm } from "../lib/api"

export default function ContactPage() {
  const [formValues, setFormValues] = useState({ // Removed mobileMenuOpen
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
      <Header /> {/* Use the Header component */}

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
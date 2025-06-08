"use client";
import React, { useState, useEffect, useRef } from "react"; // Added useEffect, useRef
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";

import galleryid1 from "../../img/galleryid1.webp";
import galleryid2 from "../../img/galleryid2.webp";
import galleryid3 from "../../img/galleryid3.webp";
import galleryid4 from "../../img/galleryid4.webp";
import galleryid5 from "../../img/Neupflanzung/galleryid5.webp";
import galleryid6 from "../../img/Neupflanzung/galleryid6.webp";
import galleryid7 from "../../img/Neupflanzung/galleryid7.webp";
import galleryid8 from "../../img/Neupflanzung/galleryid8.webp";
import galleryid9 from "../../img/Neupflanzung/galleryid9.webp";
import galleryid10 from "../../img/Neupflanzung/galleryid10.webp";
import galleryid11 from "../../img/Neupflanzung/galleryid11.webp";


const projects = [
  {
    id: 1,
    title: "Rückschnitt von Sträuchern und Beseitigung von Unkraut",
    description: "Auf dem ersten Bild ist ein stark überwucherter Gehweg zu sehen, auf dem Sträucher und Unkraut in den Weg hineinwachsen. Dies behindert die Nutzung des Weges und lässt die Umgebung ungepflegt erscheinen.",
    image: galleryid1,
  },
  {
    id: 2,
    title: "Rückschnitt von Sträuchern und Beseitigung von Unkraut",
    description: "Im zweiten Bild wurden die Sträucher ordentlich zurückgeschnitten und das Unkraut entfernt. Der Gehweg ist wieder vollständig freigelegt und die Fläche wirkt sauber und gepflegt.",
    image: galleryid2,
  },
  {
    id: 3,
    title: "Optimierung des Kiesbereichs entlang des Gebäudes",
    description: "Auf dem ersten Bild erkennt man einen Kiesbereich entlang des Gebäudes, der leicht mit Laub und vereinzeltem Unkraut bewachsen ist. Dieser Bereich weist darauf hin, dass eine regelmäßige Pflege sinnvoll ist, um das saubere und ansprechende Erscheinungsbild langfristig zu erhalten. Der Zustand zeigt den Bedarf an einer gründlichen Reinigung und Pflege.",
    image: galleryid3,
  },
  {
    id: 4,
    title: "Optimierung des Kiesbereichs entlang des Gebäudes",
    description: "Das zweite Bild zeigt den Bereich nach der durchgeführten Gartenpflege. Der Kiesbereich wurde von Laub und Unkraut befreit, was zu einem deutlich aufgeräumteren und gepflegten Eindruck führt. Der Weg wirkt nun sauber und ordentlich, was zu einer deutlichen optischen Verbesserung beiträgt.",
    image: galleryid4,
  },
  {
    id: 5,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild",
    description: "Der Gartenbereich zeigt deutlichen Wildwuchs und herabgefallene Blätter. Es war eine gründliche Pflege notwendig, um die Pflanzenflächen vorzubereiten und für eine neue Pflanzung vorzubereiten.",
    image: galleryid5,
  },
  {
    id: 6,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild",
    description: "Noch ein Blick auf die vorhandene Vegetation und den Zustand vor der Neupflanzung. Hier zeigt sich der Bedarf an Reinigung und Pflege, bevor die neuen Pflanzen gesetzt wurden.",
    image: galleryid6,
  },
  {
    id: 7,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild.",
    description: "\n Bild 3-7 (Nachher-Bilder) \n\nNach der gründlichen Gartenpflege und der Neupflanzung präsentiert sich der Gartenbereich in voller Pracht. Die frisch gepflanzten Sträucher sind symmetrisch angeordnet, was dem Garten ein aufgeräumtes und harmonisches Aussehen verleiht. Die bunten Blumen und frischen Grünpflanzen sorgen für einen lebendigen und gepflegten Eindruck.",
    image: galleryid7,
  },
  {
    id: 8,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild.",
    description: "",
    image: galleryid8,
  },
  {
    id: 9,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild.",
    description: "",
    image: galleryid9,
  },
  {
    id: 10,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild.",
    description: "",
    image: galleryid10,
  },
  {
    id: 11,
    title: "Grünflächenpflege und Neupflanzung für ein Frisches und Gepflegtes Gartenbild.",
    description: "",
    image: galleryid11,
  },
];

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const openModal = (project) => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    setCurrentImage(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  };

  useEffect(() => {
    if (modalOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeModal();
          return;
        }
        if (event.key === "Tab") {
          if (focusableElements.length === 0) return;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [modalOpen]);

  const nextImage = () => {
    const currentIndex = projects.findIndex((p) => p.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentImage(projects[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = projects.findIndex((p) => p.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentImage(projects[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* Use the Header component */}

      {/* Gallery Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Unsere Projektgalerie
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Entdecken Sie unser Portfolio erfolgreicher Projekte und
            Transformationen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => openModal(project)}
            >
              <div className="flex-shrink-0 relative group">
                <Image
                  // className="h-48 w-full object-cover" // Removed to allow natural aspect ratio
                  src={project.image}
                  alt={project.title}
                  // width={800} // Removed to use intrinsic width
                  // height={600} // Removed to use intrinsic height
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes prop
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3' }} // Maintain aspect ratio, cover container
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

{/* Modal */}
{modalOpen && currentImage && (
  <div
    className="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    ref={modalRef} // Add ref to modal container
  >
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      {/* Overlay (background) */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={closeModal}
      ></div>

      {/* This span keeps the modal centered vertically */}
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      {/* Modal container */}
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full">
        {/* Increased max-w to 4xl for larger screens */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                {currentImage.title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {currentImage.description}
                </p>
              </div>
            </div>
          </div>

          {/* Image display section */}
          <div className="mt-5 sm:mt-4 flex justify-center">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Increased max width and height for larger image display */}
              <Image
                src={currentImage.image}
                alt={currentImage.title} // Use project title as alt text
                style={{objectFit:"contain", width: '100%', height: 'auto', maxHeight: '80vh'}} // Ensures the image keeps its aspect ratio and fits modal
                className="rounded-lg"
                // unoptimized // Removed to enable Next.js optimization
                // width={800} // Removed to use intrinsic width
                // height={600} // Removed to use intrinsic height
                sizes=" (max-width: 1024px) 90vw, 800px" // Added sizes for modal
              />
            </div>
          </div>
        </div>

        {/* Modal footer with buttons */}
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={closeModal}
          >
            Schließen
          </button>
          <button
            type="button"
            className="mr-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="mr-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 LeniS, Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from 'next/image'
import Link from 'next/link'
// import styles from './ErrorPage.module.css' // Removed CSS module import
import oops from '../img/Oops...png'

export default function Custom404() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image 
        src={oops}
        alt="404 Error"
        fill
        style={{objectFit:"cover"}}
        className="z-[-1]" // Applied z-index directly
        quality={100}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] max-w-[800px] bg-black/60 p-8 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-shadow">Oops! Diese Seite ist wohl im Dschungel verschwunden...</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-shadow">Es sieht so aus, als wären wir auf eine wilde Expedition gegangen und haben diese Seite aus den Augen verloren. 🍃</p>

        <div className="flex flex-col gap-4">
          <Link href="/" className="text-green-500 underline text-lg sm:text-xl md:text-2xl lg:text-3xl transition-colors duration-300 hover:text-yellow-400 text-shadow">
            Zurück zur Startseite
          </Link>
          <Link href="/gallery" className="text-green-500 underline text-lg sm:text-xl md:text-2xl lg:text-3xl transition-colors duration-300 hover:text-yellow-400 text-shadow">
            Oder entdecke unsere anderen Inhalte
          </Link>
        </div>
      </div>
    </div>
  )
}
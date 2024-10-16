import Image from 'next/image'
import Link from 'next/link'
import styles from './ErrorPage.module.css'
import oops from '../img/Oops...png'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Image 
        src={oops}
        alt="404 Error"
        fill
        style={{objectFit:"cover"}}
        className={styles.backgroundImage}
        quality={100}
      />

      <div className={styles.textOverlay}>
        <h1 className={styles.h1}>Oops! Diese Seite ist wohl im Dschungel verschwunden...</h1>
        <p className={styles.p}>Es sieht so aus, als wären wir auf eine wilde Expedition gegangen und haben diese Seite aus den Augen verloren. 🍃</p>

        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Zurück zur Startseite
          </Link>
          <Link href="/gallery" className={styles.link}>
            Oder entdecke unsere anderen Inhalte
          </Link>
        </div>
      </div>
    </div>
  )
}
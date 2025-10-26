const Footer = () => {
  return (
    <footer className="mt-12 py-6 text-sm text-center text-gray-500 border-t border-gray-200">
      <p>
        © {new Date().getFullYear()} LeniS, Alle Rechte vorbehalten.{' '}
        <a href="/impressum" className="underline hover:text-gray-700 transition">
          Impressum
        </a>{' '}
        ·{' '}
        <a href="/datenschutzerklarung" className="underline hover:text-gray-700 transition">
          Datenschutzerklärung
        </a>
      </p>
    </footer>
  );
};

export default Footer;

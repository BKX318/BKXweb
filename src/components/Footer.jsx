import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer fade-in">
      <p>© 2026 BKX Epoxy</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/bkx.epoxy/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61586300643014" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.tiktok.com/@bkx.epoxy" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <p className="text-lg font-bold">Cygnet Photo</p>
        <p>Capturing your moments. Est. 2024</p>
      </div>
      <div>
        <span className="footer-title">Navigation</span>
        <a className="link link-hover" href="/">Home</a>
        <a className="link link-hover" href="/portfolio">Portfolio</a>
        <a className="link link-hover" href="/blog">Blog</a>
        <a className="link link-hover" href="/contact">Contact</a>
      </div>
    </footer>
  );
}
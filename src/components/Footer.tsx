export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} Malith Bandara
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
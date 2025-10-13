export default function Footer() {
  return (
    <footer className="border-t border-white/10 backdrop-blur-md bg-gradient-to-r from-white/5 via-transparent to-white/5">
      <div className="flex justify-center items-center h-14 px-4">
        <p className="text-xs md:text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="opacity-70">•</span>{" "}
          Built with ❤️ by{" "}
          <a
            href="https://github.com/hilmi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent2 hover:text-accent1 transition-colors duration-300 font-medium"
          >
            Hilmi Yahya
          </a>
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Footer Columns */}
        <div className="w-full flex flex-row flex-wrap items-start justify-around mb-6">
          {/* Community */}
          <div className="min-w-[200px] flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <Link
              href="https://github.com/Hanland-netizen"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center my-2 hover:text-purple-400 transition-colors"
            >
              GitHub
            </Link>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Social Media</h3>
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center my-2 hover:text-purple-400 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center my-2 hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </Link>
          </div>

          {/* About */}
          <div className="min-w-[200px] flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4">About</h3>
            <Link
              href="#about"
              className="flex flex-row items-center my-2 hover:text-purple-400 transition-colors"
            >
              Learning about me
            </Link>
            <Link
              href="#contact"
              className="flex flex-row items-center my-2 hover:text-purple-400 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[14px] text-center border-t border-gray-700 pt-4 w-full">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Hangeldi Jorayev</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

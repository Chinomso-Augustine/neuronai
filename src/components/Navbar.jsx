import { useEffect, useState } from 'react';
import { routes } from '../app/routes.js';

function Navbar({ currentPath, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handles navigation clicks while keeping the app on the same page load.
  const handleClick = (event, path) => {
    event.preventDefault();
    setIsMenuOpen(false);
    onNavigate(path);
  };

  // Closes the mobile menu when users resize back to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Fixed Navigation Bar
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 shadow-lg shadow-black/20 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8"
      >
        {/* Desktop Navigation Links */}
        <ul className="hidden min-w-max items-center gap-8 text-base font-semibold lg:flex">
          {routes.map(({ path, label }) => {
            const isActive = currentPath === path;

            return (
              <li key={path}>
                <a
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative inline-flex min-h-10 items-center whitespace-nowrap transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-orange-500 after:transition-transform hover:text-orange-500 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ${
                    isActive
                      ? 'text-orange-500 after:scale-x-100'
                      : 'text-white'
                  }`}
                  href={path}
                  onClick={(event) => handleClick(event, path)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/25 text-white transition-colors hover:border-orange-500 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`border-t border-white/10 bg-[#1e2a66]/95 px-4 py-5 shadow-xl shadow-black/20 lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        id="mobile-navigation"
      >
        <ul className="mx-auto grid max-w-7xl gap-2 text-base font-semibold">
          {routes.map(({ path, label }) => {
            const isActive = currentPath === path;

            return (
              <li key={path}>
                <a
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-11 items-center rounded-lg border-l-4 px-4 transition-colors hover:border-orange-500 hover:bg-white/10 hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ${
                    isActive
                      ? 'border-orange-500 text-orange-500'
                      : 'border-transparent text-white'
                  }`}
                  href={path}
                  onClick={(event) => handleClick(event, path)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

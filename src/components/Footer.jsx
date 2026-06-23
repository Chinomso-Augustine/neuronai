import { getPublicPath } from '../app/pathUtils.js';

const usefulLinks = [
  {
    label: 'Products & Services',
    path: '/products-and-services',
  },
  {
    label: 'List Title',
    path: '/',
  },
  {
    label: 'Team Neuron',
    path: '/team-neuron',
  },
  {
    label: 'Our Media',
    path: '/our-media',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
  },
];

function Footer({ onNavigate }) {
  // Keeps footer links inside the same lightweight routing flow as the navbar.
  const handleFooterLinkClick = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  // Prevents the placeholder subscribe form from refreshing the page.
  const handleSubscribe = (event) => {
    event.preventDefault();
  };

  return (
    // Footer Section
    <footer className="bg-gradient-to-b from-[#9cc6fd] to-[#1e2a66] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr_1fr]">
        {/* Footer Brand */}
        <div>
          <a
            className="inline-flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            href={getPublicPath('/')}
            onClick={(event) => handleFooterLinkClick(event, '/')}
          >
            <span className="grid h-20 w-20 place-items-center rounded-full border border-white/40 bg-white/90 text-2xl font-bold text-[#1e2a66] shadow-sm">
              NE
            </span>
            <span className="text-3xl font-semibold tracking-wide text-white">
              neuron edge ai
            </span>
          </a>
          <p className="mt-8 max-w-sm text-base leading-8 text-white">
            Neuron Edge AI is a community of AI, Edge, Digital and cross
            industry experts, who help Re-imagine your business to Digital and
            AI transformation.
          </p>

          {/* Social Links */}
          <div className="mt-12 flex gap-4">
            <a
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/60 text-white transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              href="https://www.linkedin.com"
              rel="noreferrer"
              target="_blank"
            >
              in
            </a>
            <a
              aria-label="YouTube"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/60 text-white transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              href="https://www.youtube.com"
              rel="noreferrer"
              target="_blank"
            >
              ▶
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-bold underline underline-offset-4">
            Useful Links
          </h2>
          <nav aria-label="Footer navigation" className="mt-10">
            <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="group inline-flex items-center gap-3 transition-colors hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                    href={getPublicPath(link.path)}
                    onClick={(event) =>
                      handleFooterLinkClick(event, link.path)
                    }
                  >
                    <span className="text-2xl font-bold text-orange-300 transition-colors group-hover:text-orange-500">
                      »
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Subscribe Form */}
        <div>
          <h2 className="text-xl font-bold underline underline-offset-4">
            Subscribe Now
          </h2>
          <p className="mt-8 text-base">
            Don’t miss our future updates! Get Subscribed Today!
          </p>
          <form
            className="mt-4 flex max-w-md overflow-hidden rounded-full border border-[#1e2a66] bg-white"
            onSubmit={handleSubscribe}
          >
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              className="min-h-14 min-w-0 flex-1 px-5 text-[#1e2a66] outline-none placeholder:text-black/55"
              id="footer-email"
              name="email"
              placeholder="Your mail here"
              type="email"
            />
            <button
              aria-label="Subscribe"
              className="grid min-h-14 w-16 place-items-center rounded-lg bg-[#1e2a66] text-xl text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              type="submit"
            >
              ✉
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-orange-500 px-6 py-4 text-center text-base font-semibold text-white">
        ©2024. neouronai.in All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

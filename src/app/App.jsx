import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { getRouteByPath } from './routes.js';

function App() {
  // Current route state used by the lightweight page navigation.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const activeRoute = useMemo(() => getRouteByPath(currentPath), [currentPath]);
  const ActivePage = activeRoute.Component;

  // Keeps browser back and forward buttons in sync with the active page.
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Updates the URL and swaps the visible page without a full refresh.
  const handleNavigate = (path) => {
    if (path === currentPath) {
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <Navbar currentPath={activeRoute.path} onNavigate={handleNavigate} />

      {/* Active Page Content */}
      <main>
        <ActivePage />
      </main>

      {/* Footer Section */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

import AboutNeuronEdgeAI from '../pages/AboutNeuronEdgeAI.jsx';
import AllMedia from '../pages/AllMedia.jsx';
import Home from '../pages/Home.jsx';
import ProductsAndSolutions from '../pages/ProductsAndSolutions.jsx';
import ReachUs from '../pages/ReachUs.jsx';
import TeamNeuron from '../pages/TeamNeuron.jsx';

// Page routes used by the navbar and app shell.
export const routes = [
  {
    path: '/',
    label: 'Home',
    Component: Home,
  },
  {
    path: '/products-and-services',
    label: 'Products & Services',
    Component: ProductsAndSolutions,
  },
  {
    path: '/team-neuron',
    label: 'Team Neuron',
    Component: TeamNeuron,
  },
  {
    path: '/our-media',
    label: 'Our Media',
    Component: AllMedia,
  },
  {
    path: '/about',
    label: 'About',
    Component: AboutNeuronEdgeAI,
  },
  {
    path: '/contact-us',
    label: 'Contact Us',
    Component: ReachUs,
  },
];

// Finds the matching page for the current browser URL.
export const getRouteByPath = (pathname) =>
  routes.find((route) => route.path === pathname) ?? routes[0];

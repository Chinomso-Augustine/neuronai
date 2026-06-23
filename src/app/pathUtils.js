const baseUrl = import.meta.env.BASE_URL;
const basePath = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');

export const getRoutePathFromUrl = (pathname) => {
  if (!basePath) {
    return pathname || '/';
  }

  if (!pathname.startsWith(basePath)) {
    return pathname || '/';
  }

  const routePath = pathname.slice(basePath.length);
  return routePath || '/';
};

export const getPublicPath = (path) => {
  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  if (path === '/') {
    return basePath ? `${basePath}/` : '/';
  }

  return `${basePath}${path}`;
};

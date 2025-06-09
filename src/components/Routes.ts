

export const Routes = {
  home: {
    loader: () => import('./Home.js')
  },
  about: {
    loader: () => import('./About.js')
  },
  counter: {
    loader: () => import('./Counter.js')
  },
  hello: {
    loader: () => import('./Hello.js'),
    cacheExpiration: 60000
  },

  // fallback route: load login page if route not found
  fallback: 'home'
};

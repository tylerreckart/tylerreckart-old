export const routes = {
  '/': {
    title: 'Home',
    '/about': {
      title: 'About'
    },
    '/journal': {
      title: 'Journal', 
      '/:post': {
        title: 'Entry'
      }
    },
  }
};
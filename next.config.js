module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
    loader: 'custom',
    path: '',
    customLoader: ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    },
  },
}

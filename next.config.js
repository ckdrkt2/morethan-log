module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
    loader: 'imgix',  // or 'imgix', 'cloudinary'
    path: 'https://file.notion.so',  // replace with the base path of your images on Notion
  },
}

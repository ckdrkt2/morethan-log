module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
    loader: 'custom',
    path: '',
    customLoader: ({ src, width, quality }) => {
      if (src.startsWith('http')) {
        // 외부 URL에 대한 처리
        return `${src}?w=${width}&q=${quality || 75}`;
      } else {
        // 프로젝트 내부의 URL에 대한 처리
        return `/path/to/your/local/image/directory${src}?w=${width}&q=${quality || 75}`;
      }
    },
  },
}

// TODO renew date in URL
const newsConfig = {
  url: (string) => {
    return `https://newsapi.org/v2/everything?` +
      `q=${string}&` +
      `from=2020-11-10&to=2020-12-03&` +
      `sortBy=relevancy&` +
      `apiKey=d4a483a63e6f45ea9d32eefd97080f26`
  },
}

export { newsConfig }

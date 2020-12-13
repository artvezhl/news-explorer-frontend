import formatDate from "../utils/formatDate"

const today = new Date().toISOString().substring(0,10);
const oneWeekAgo = new Date(new Date() - ((24 * 60 * 60 * 1000) * 7)).toISOString().substring(0,10);

const newsConfig = {
  url: (string) => {
    return `https://newsapi.org/v2/everything?` +
      `q=${string}&` +
      `from=${oneWeekAgo}&to=${today}&` +
      `sortBy=relevancy&` +
      `apiKey=d4a483a63e6f45ea9d32eefd97080f26&` +
      `pageSize=100`
  },
  formatDate: formatDate,
}

export { newsConfig }

import formatDate from "../utils/formatDate"

const today = new Date().toISOString().substring(0,10);
const oneWeekAgo = new Date(new Date() - ((24 * 60 * 60 * 1000) * 7)).toISOString().substring(0,10);
const NEWS_API_PATH = (process.env.NODE_ENV === 'development')
  ? `https://newsapi.org/v2/everything?`
  : 'https://nomoreparties.co/news/v2/everything?';

const newsConfig = {
  url: (string) => {
    return NEWS_API_PATH +
      `q=${string}&` +
      `from=${oneWeekAgo}&to=${today}&` +
      `sortBy=relevancy&` +
      `apiKey=d4a483a63e6f45ea9d32eefd97080f26&` +
      `pageSize=100`
  },
  formatDate: formatDate,
}

export { newsConfig }

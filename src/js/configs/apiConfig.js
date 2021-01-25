const apiConfig = {
  baseUrl: (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3000'
    : 'https://www.api.diploma-web.tk',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `${localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
  }
}

export { apiConfig };

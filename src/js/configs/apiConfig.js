const apiConfig = {
  baseUrl: (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3000'
    : 'http://api.diploma-web.tk',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `${localStorage.getItem('token')}`,
  }
}

export { apiConfig };

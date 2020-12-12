const apiConfig = {
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `${localStorage.getItem('token')}`,
  }
}

export { apiConfig };

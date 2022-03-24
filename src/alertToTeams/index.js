const axios = require('axios');

const data = {
  'title': 'Title',
  'text': 'text'
}

function sendAlertToTeams(endpoint, data) {
  const instance = axios.create({
    baseURL: endpoint,
    headers: { 'Content-Type': 'application/json' },
  });
  return instance.post('', data);
}
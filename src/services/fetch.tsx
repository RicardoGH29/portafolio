
const urlBase = 'http://localhost:3000';

async function fetchDataPostAsync(url: string, data: object) {
  return fetch(`${urlBase}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
export { fetchDataPostAsync };
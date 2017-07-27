export const getFetch = (url) => fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(function (response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    return data;
  })


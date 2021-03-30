export const hello = () => {
  const url = 'http://localhost:5000/'

  fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'appliaction/json' },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data)
    })
}

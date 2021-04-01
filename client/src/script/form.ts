export const handleForm = () => {
  const target = document.getElementById('form')
  const titleElement = document.getElementById('titleInput') as HTMLInputElement
  const contentElement = document.getElementById('cotntentInput') as HTMLInputElement

  if (!(target && titleElement && contentElement)) return

  target.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = titleElement.value
    const content = contentElement.value

    sendArticle({
      title,
      content,
    })
  })
}

const sendArticle = async (article: { title: string; content: string }) => {
  const url = 'http://localhost:5000/create'

  console.log(JSON.stringify(article))

  fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'appliaction/json' },
    body: JSON.stringify(article),
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data)
    })
}

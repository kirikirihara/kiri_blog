export const hello = () => {
  const url = 'http://localhost:5000/'

  fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'appliaction/json' },
  })
    .then((result) => result.json())
    .then((data) => {
      renderContentent(data)
    })
}

type Blog = {
  id: number
  title: string
  content: string
}[]

const renderContentent = (data: Blog) => {
  const target = document.getElementById('blog')

  if (!target) return

  const blogItems = data.map((datum) => {
    return `
      <div class="blogItemContainer">
        <small>${datum.id}</small>
        <h1>${datum.title}</h1>
        <p>${datum.content}</p>
      </div>
    `
  })

  target.innerHTML = blogItems.join('')
}

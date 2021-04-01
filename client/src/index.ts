import 'ress'
import './style/index.scss'
import { hello } from 'script/hello'
import { handleForm } from 'script/form'

document.addEventListener('DOMContentLoaded', () => {
  hello()
  handleForm()
})

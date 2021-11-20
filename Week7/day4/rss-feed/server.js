const express = require('express')
const cors = require('cors')
const {
  getRSSFeed,
  getPostsByTitle,
  getPostsByCategory,
} = require('./modules/rss-feed.mod')

const app = express()

app.set('view engine', 'ejs')
app.use(cors())
app.use('/static', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (_, res) => {
  const posts = await getRSSFeed()

  res.render('pages/index', { posts })
})

app.get('/search', async (_, res) => {
  res.render('pages/search', {
    posts: [],
  })
})

app.post('/search/title', async (req, res) => {
  const { title } = req.body

  res.render('pages/search', {
    posts: await getPostsByTitle(title),
  })
})

app.post('/search/category', async (req, res) => {
  const { category } = req.body

  res.render('pages/search', {
    posts: await getPostsByCategory(category),
  })
})

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})

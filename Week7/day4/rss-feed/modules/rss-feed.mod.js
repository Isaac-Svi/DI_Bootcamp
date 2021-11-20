const Parser = require('rss-parser')
const parser = new Parser()

const getRSSFeed = async () => {
  const feed = await parser.parseURL('https://www.thefactsite.com/feed/')
  return feed.items
}

const getPostsByTitle = async (title) => {
  const posts = await getRSSFeed()
  return posts.filter((post) => {
    return post.title.toLowerCase() === title.toLowerCase()
  })
}

const getPostsByCategory = async (category) => {
  category = category.toLowerCase()
  const posts = await getRSSFeed()
  return posts.filter((post) => {
    return post.categories.map((x) => x.toLowerCase()).includes(category)
  })
}

module.exports = {
  getRSSFeed,
  getPostsByTitle,
  getPostsByCategory,
}

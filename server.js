const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/api/articles", (req, res) => {
  res.json([
    { id: 1, title: "Artículo 1", slug: "articulo-1" },
    { id: 2, title: "Artículo 2", slug: "articulo-2" }
  ])
})

app.get("/api/featured-articles", (req, res) => {
  res.json([
    { id: 1, title: "Destacado", slug: "destacado" }
  ])
})

app.get("/api/categories", (req, res) => {
  res.json(["monumentos", "cultura", "historia"])
})

const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

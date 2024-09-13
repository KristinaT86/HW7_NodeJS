import express from 'express'

const app = express();
const PORT = 3306;

app.get('/', (req, res) => {
    res.send('Hello, i\'m working'); // i\'m Screening
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
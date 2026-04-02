const express = require('express');
const router = express.Router();

// banco fake (em memória)
let games = [];

router.get('/', (req, res) => {
    res.json(games);
});

router.post('/', (req, res) => {
    const { title, genre, release_year } = req.body;

    if (!title) {
        return res.status(400).json({ error: "title é obrigatório" });
    }

    const newGame = {
        id: games.length + 1,
        title,
        genre,
        release_year
    };

    games.push(newGame);

    res.status(201).json(newGame);
});

module.exports = router;
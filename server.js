// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('../be/routes/authRoutes');
const postRoutes = require('../be/routes/postRoutes');
const likeRoutes = require('../be/routes/likeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ranjanirithu206:KS0pwc1jwcIxmZu0@cluster0.8mgcr.mongodb.net/MEAN?retryWrites=true&w=majority", {
    family: 4
})
    .then(() => console.log("Mongo DB Connected"))
    .catch(error => console.log(error));

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/like', likeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

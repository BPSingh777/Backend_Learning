const express = require('express');
const yatriRoutes = require('./yatri');
const app = express();

app.use(express.json());

// // Use yatri.js to handle all /student, /professor, /employee routes
// app.use('/student', yatriRoutes);
// app.use('/professor', yatriRoutes);
// app.use('/employee', yatriRoutes);

app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
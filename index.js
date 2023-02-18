const express = require('express');

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

const port = 3333;

app.get('', (req, res) => {
  res.render('trangchu');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});

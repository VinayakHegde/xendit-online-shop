const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
const appConfig = require('./app.json');

const configuration = require('./handler/configuration');
app.get(configuration.url, configuration.handler);

const products = require('./handler/products');
app.get(products.url, products.handler);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "index.html"));
});

const PORT = appConfig.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const { uuid } = require("uuidv4");
const handler = async (req, res) => {
  res.json({
    token: uuid(),
    currency: "IDR",
  });
};

module.exports = {
  handler,
  url: '/api/config'
};

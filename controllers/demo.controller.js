const Demo = require("../models/demo.model");
const db = require("../database")

const myControllerFunction = async (req, res) => {

 



  const newTank = await Demo.create(req.body)
  console.log()

  res.status(200).json(newTank);
};

module.exports = {
  myControllerFunction,
};

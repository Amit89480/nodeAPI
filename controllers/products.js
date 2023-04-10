
const product = require("../models/products");
const getallProducts = async (req, res) => {


  const { company, name, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $option: "i" };
  }



  let apiData = product.find(req.query);

  if (sort) {
    let sortFixSpacingProblem = sort.split(",").join(" ");
    apiData = apiData.sort(sortFixSpacingProblem);
  }



  if (select) {
 
    let selectFixSpacingProblem = select.split(",").join(" ");
    apiData = apiData.select(selectFixSpacingProblem);
    }
    

    let page = Number(req.query.page)||1
    let limit = Number(req.query.limit)||3
    
    let skippingPrevious = (page - 1) * limit
    
    apidata=apiData.skip(skippingPrevious).limit(limit)

  const Products = await apiData;
    res.status(200).json({Products, nbhits: Products.length});
};

const getallProductsTesting = async (req, res) => {
  const myData1 = await product.find({});

  res.status(200).json({ myData1, nbHits: myData1.length });
};

module.exports = { getallProducts, getallProductsTesting };

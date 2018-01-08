//import express to run a server
import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/Product.js';

var router = express.Router();

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
    Product.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

module.exports = router;
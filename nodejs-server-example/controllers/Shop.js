'use strict';

var utils = require('../utils/writer.js');
var Shop = require('../service/ShopService');

module.exports.findAllProducts = function findAllProducts (req, res, next) {
  Shop.findAllProducts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findShopInformations = function findShopInformations (req, res, next) {
  Shop.findShopInformations()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

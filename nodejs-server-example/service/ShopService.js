'use strict';


/**
 * Obter todos os produtos
 *
 * returns List
 **/
exports.findAllProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 0.8008281904610115,
  "name" : "name",
  "photo" : "photo",
  "is_promotion" : true
}, {
  "price" : 0.8008281904610115,
  "name" : "name",
  "photo" : "photo",
  "is_promotion" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obter informações da loja
 *
 * returns ShopResponse
 **/
exports.findShopInformations = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "color" : "color",
  "name" : "name",
  "department" : "department"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


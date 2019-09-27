var orm = require('../config/orm.js');


var burger = {
    //function to display all the burgers already in the database
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    //create burger
    create: function (col, val, cb) {
        orm.create("burgers", col, val, function (res) {
            cb(res);
        });
    },

    //update/devour
    update: function (colval, condition, cb) {
        orm.update("burgers", colval, condition, function (res) {
            cb(res);
        });
    }

};





module.exports = burger;
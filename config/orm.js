//Import mysql connection
var connection = require('../config/connection.js');

//helper function to create an array of string of question marks
function questionMark(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objectToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {

    // * `selectAll()`
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    // * `insertOne()`
    create: function (table, col, val, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += col.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += questionMark(val.length);
        queryString += ") ";

        //console.log(queryString);

        connection.query(queryString, val, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // * `updateOne()`
    update: function (table, objColVal, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objectToSql(objColVal);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }



};



module.exports = orm;
module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define('Burgers', {
        burger_name: {
            type: DataTypes.STRING,
            AllowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burgers;
}
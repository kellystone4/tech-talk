module.exports = function (sequelize, DataTypes) {
    // Define Tag model
    var Tag = sequelize.define("Tag", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Tag.associate = function (models) {
    //     // A tag has many posts
    //     models.Tag.hasMany(models.Post);
    // };

    return Tag;
};
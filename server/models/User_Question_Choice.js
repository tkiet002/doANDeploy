const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_Question_Choice', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    choice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Question_Choice',
        key: 'choice_id'
      }
    },
    user_answer_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.literal('CURDATE()')
    }
  }, {
    sequelize,
    tableName: 'User_Question_Choice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "choice_id" }
        ]
      },
      {
        name: "User_Question_Choice_user_id_choice_id_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "choice_id" }
        ]
      }
    ]
  });
};
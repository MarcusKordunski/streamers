"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Streamer extends Model {
  }
  Streamer.init(
    {
      name: DataTypes.STRING,
      platform: {
        type: DataTypes.ENUM,
        values: ["Twitch", "Kick", "YouTube", "TikTok", "Rumble"],
        validate: {
          isIn: [["Twitch", "Kick", "YouTube", "TikTok", "Rumble"]],
        },
      },
      description: DataTypes.TEXT,
      upvotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: true,
        },
      },
      downvotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Streamer",
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return Streamer;
};

"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, ENUM, STRING, DATE, TEXT }) {
    await queryInterface.createTable("Streamers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      name: {
        type: STRING,
      },
      platform: {
        type: ENUM("Twitch", "Kick", "YouTube", "TikTok", "Rumble"),
      },
      description: {
        type: TEXT,
      },
      upvotes: {
        type: INTEGER,
      },
      downvotes: {
        type: INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DATE,
      },
      updated_at: {
        allowNull: false,
        type: DATE,
      },
      deleted_at: {
        type: DATE,
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Streamers");
  },
};

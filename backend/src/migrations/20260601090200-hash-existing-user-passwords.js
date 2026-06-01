'use strict';

const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');

const isBcryptHash = (value) => typeof value === 'string' && value.startsWith('$2');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const users = await queryInterface.sequelize.query(
      'SELECT id, password FROM "Users" WHERE password IS NOT NULL',
      { type: QueryTypes.SELECT }
    );

    for (const user of users) {
      if (!user.password || isBcryptHash(user.password)) continue;

      const hashedPassword = await bcrypt.hash(user.password, 10);

      await queryInterface.sequelize.query(
        'UPDATE "Users" SET password = :password, "updatedAt" = :updatedAt WHERE id = :id',
        {
          replacements: {
            id: user.id,
            password: hashedPassword,
            updatedAt: new Date()
          }
        }
      );
    }
  },

  async down() {
    // Password hashes cannot be safely converted back to plain text.
  }
};

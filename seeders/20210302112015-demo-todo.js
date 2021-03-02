'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('todos', [{
    category: 'test test',
    description: "intitial todo",
    dueDate: "2020-11-21",
    createdAt: "2021-03-02 10:50:55.1+03",
    updatedAt: "2021-03-02 10:50:55.1+03"
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  }
};

'use strict';

const { on } = require('nodemon');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('blogs', [{
    title:"HeatChliff",
    content:"Ini hanya uji coba seeder",
    startDate: "12 Jan 2024",
    endDate: "30 Jan 2024",
    nodeJs:true,
    reactJs:true,
    angular:true,
    vueJs:false,
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('blogs', null, {});
  }
};

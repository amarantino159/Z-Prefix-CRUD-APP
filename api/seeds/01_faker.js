/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
// import { faker } from '@faker-js/faker';

exports.seed = async function(knex) {
  // Deletes ALL existing entries

  var data =[];
  for(var i =0;i<100;i++){
    var mock ={
      name:faker.company.name() ,
      description:faker.company.catchPhrase(),
      clearance: 'TS/SCI/no foreign',
      location_id: 1,
      risk_rating:faker.number.int(10,1),
      risk_description: 'the subs are better at risk',
      affiliation:'CTR',
      image_url: 'https:notavaible'};
    data.push(mock);
  }
  await knex('player_node').del()
  await knex('player_node').insert(
    data
  );
};






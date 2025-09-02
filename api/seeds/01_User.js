/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Users').del()
  await knex('Users').insert([
    {id: 1, First_Name: 'rowValue1'},
    {id: 2, First_Name: 'rowValue2'},
    {id: 3, First_Name: 'rowValue3'}
  ]);
};

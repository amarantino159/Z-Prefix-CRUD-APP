/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Item').del()
  await knex('Item').insert([
    {id: 1, Item_Name: 'rowValue1',UserId: '1'},
    {id: 2, Item_Name: 'rowValue2',UserId: '1'},
    {id: 3, Item_Name: 'rowValue3',UserId: '1'}
  ]);
};

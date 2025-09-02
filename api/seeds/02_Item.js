/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item').del()
  await knex('item').insert([
    {
      UserId: '1',
      Item_Name: 'shoe',
      Description: 'shoes are for feet',
      Quantity: '5000'
    },
    {
      UserId: '3',
      Item_Name: 'shirt',
      Description: 'shirts are not for feet',
      Quantity: '200'
    },
    {
      UserId: '1',
      Item_Name: 'pants',
      Description: 'pants are for legs',
      Quantity: '10'
    },
  ]);
};

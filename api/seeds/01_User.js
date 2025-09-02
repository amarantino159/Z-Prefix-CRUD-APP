/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      First_Name: 'tester1',
      Last_Name: 'mytester1',
      Username: 'testme',
      Password: '123password'
    },
    {
      First_Name: 'tester2',
      Last_Name: 'mytester2',
      Username: 'testme2',
      Password: 'password123'
    },
    {
      First_Name: 'tester3',
      Last_Name: 'mytester2',
      Username: 'testme3',
      Password: '234password'
    },
  ]);
};

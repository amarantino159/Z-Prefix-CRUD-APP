/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    console.log("Migrating...item");
  return knex.schema.createTable("item", (table) => {
  table.increments("id");
  table.integer('UserId');
  table.foreign('UserId').references('users.id');
  table.string('Item_Name');
  table.string('Description');
  table.integer('Quantity');

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('item',table => {
    table.dropForeign('UserId')

  })
    .then(function(){
      return knex.schema.dropTableIfExists('item');
    })
};

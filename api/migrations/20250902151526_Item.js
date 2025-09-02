/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    console.log("Migrating...Item");
  return knex.schema.createTable("Item", (table) => {
  table.increments("id");
  table.integer('UserId');
  table.foreign('UserId').references('Users.id');
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
  return knex.schema.alterTable('Item',table => {
    table.dropForeign('Userid')

  })
    .then(function(){
      return knex.schema.dropTableIfExists('Item');
    })
};

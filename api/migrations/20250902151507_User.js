/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  console.log("Migrating...Users")

  return knex.schema.createTable("Users", (table) => {
    table.increments("id");
    table.string("First_Name");
    table.string("Last_Name");
    table.string("Username");
    table.string("Password");

  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Users");
};

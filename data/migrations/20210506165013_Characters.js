
exports.up = function(knex) {
  return knex.schema
  .createTable("Characters", (tbl)=>{
    tbl.increments("character_id")
    tbl.string("character_name").notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("Characters")
};

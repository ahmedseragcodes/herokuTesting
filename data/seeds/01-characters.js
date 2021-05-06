
exports.seed = function(knex) {
      return knex('Characters').insert([
        {character_name: "Aragorn"},
        {character_name: "Legolas"},
        {character_name: "Gandalf"},
      ]);
};

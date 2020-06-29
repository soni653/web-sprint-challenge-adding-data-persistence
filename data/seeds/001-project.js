exports.seed = function (knex) {
  return knex("project").insert([
    {
      name: "Technology",
      description: "World can't leave without it",
      completed: true,
    },
    {
      name: "Businesses",
      description: "All businesses are closing due to COVID 19",
      completed: false,
    },
    {
      name: "Money Power",
      description: "Everybody has that",
      completed: false,
    },
  ]);
};

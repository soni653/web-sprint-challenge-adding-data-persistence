exports.seed = async function (knex) {
  await knex("resources").insert([
    { project_id: 1, name: "computer", description: "Technology" },
    {
      project_id: 1,
      name: "microphone",
      description: "I just bought a new one",
    },
    {
      project_id: 2,
      name: "delivery people",
      description: "Delivery People love it",
    },
    { project_id: 2, name: "Foodie lover", description: "" },
    { project_id: 3, name: "school", description: "ABC School" },
    { project_id: 3, name: "money", description: "Need it to survive" },
  ]);
};

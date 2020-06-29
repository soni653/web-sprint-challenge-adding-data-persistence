exports.seed = async function (knex) {
  await knex("task").insert([
    {
      project_id: 1,
      description: "Today's World can'e leave without it",
      notes: "World's Tech",
      completed: true,
    },
    {
      project_id: 1,
      description: "Finish lambda to get a job",
      notes: "",
      completed: true,
    },
    {
      project_id: 2,
      description: "Deliver Food",
      notes: "Foodies",
      completed: true,
    },
    {
      project_id: 2,
      description: "Amazon pays good money ",
      notes: "",
      completed: false,
    },
    {
      project_id: 3,
      description: "Good for people wjo loved generation",
      notes: "",
      completed: false,
    },
    {
      project_id: 3,
      description: "people learn to live without that",
      notes: "never gonna happened",
      completed: false,
    },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'kibble', description: 'Dry, dull, small bits of food.'},
    {id: 2, name: 'live feed', description: 'Crickets, mice, you know...'},
    {id: 3, name: 'seed', description: 'Seeds. Like our data.'}
  ]);
};

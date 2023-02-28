// ESNEK
const defaultCars = [
  {
    vin: "123",
    make: "Mercedes",
    model: "c180",
    milage: 12345,
  },
  {
    vin: "1234",
    make: "Audi",
    model: "Golf",
    milage: 12345,
  },
  {
    vin: "1235",
    make: "A4",
    model: "Golf",
    milage: 12345,
  },
  {
    vin: "1236",
    make: "Seat",
    model: "Leon",
    milage: 12345,
  },
  {
    vin: "1237",
    make: "Skoda",
    model: "Octavia",
    milage: 12345,
  },
  {
    vin: "1238",
    make: "Bmw",
    model: "520i",
    milage: 12345,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};

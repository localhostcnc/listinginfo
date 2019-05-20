const faker = require('faker');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'localhost',
  database: 'listing_info',
  password: 'connorhoman',
});

const names = ['Lake Almanor Lake Front Retreat',
  'Vintage Concept Flat in Chic Neighbourhood',
  'Relax on the Deck of a Bright Eixample Apartment',
  'Stroll to Sagrada Familia from a Sunlit Apartment',
  'Brownstone Studio',
  'Bedford Loft, Williamsburg Prime',
  'Studio Apartment Minutes Away from Downtown',
  'Beachfront Villa Near Boardwalk',
  'Cute Quirky Garden apt, NYC adjacent',
  'CLOSEST GRAND CANYON B&B/South Rim',
  'The Cabin',
  'Take in a Dip in the Heated Pool at a Luxury SoCo Retreat'];
const ownerTypes = ['Verified', 'none', 'Plus'];

for (let i = 0; i < 100; i += 1) {
  const name = names[Math.floor(Math.random() * names.length)];
  const city = faker.address.city();
  const avatar = faker.image.avatar();
  const owner = faker.name.firstName();
  const ownertype = ownerTypes[Math.floor(Math.random() * ownerTypes.length)];
  const guests = Math.floor(Math.random() * 8) + 1;
  const beds = Math.floor(Math.random() * 6) + 1;
  const rooms = Math.floor(Math.random() * 4) + 1;
  const baths = Math.floor(Math.random() * 3) + 1;
  const responserate = Math.floor(Math.random() * 100);
  const description = faker.lorem.paragraphs();
  const amenities = faker.lorem.sentence();
  const rules = faker.lorem.sentence();
  const cancellation = faker.lorem.sentence();
  const related1 = faker.lorem.sentence();
  const related2 = faker.lorem.sentence();
  const related3 = faker.lorem.sentence();
  const location = `${faker.address.latitude()},${faker.address.longitude()}`;
  const nearbycities = `${faker.address.city()},${faker.address.city()},${faker.address.city()},${faker.address.city()},${faker.address.city()}`;
  const query = `INSERT INTO listing_info (name, city, avatar, owner, ownerType, guests, beds, rooms, baths, responseRate, description, amenities, rules, cancellation, related1, related2, related3, location, nearbyCities) VALUES ('${name}', '${city}', '${avatar}', '${owner}', '${ownertype}', ${guests}, ${beds}, ${rooms}, ${baths}, ${responserate}, '${description}', '${amenities}', '${rules}', '${cancellation}', '${related1}', '${related2}', '${related3}', '${location}', '${nearbycities}')`;

  pool.query(query, (err) => {
    if (err) {
      throw err;
    }
  });
}

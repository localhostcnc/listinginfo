const faker = require('faker');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'localhost',
  database: 'listing_info',
  password: 'connorhoman',
});

const name = 'The Cabin';
const city = faker.address.city();
const avatar = faker.image.avatar();
const owner = `${faker.name.firstName()} ${faker.name.lastName()}`;
const ownerType = 'Verified';
const guests = Math.floor(Math.random() * 10);
const beds = Math.floor(Math.random() * 5);
const rooms = Math.floor(Math.random() * 4);
const baths = Math.floor(Math.random() * 3);
const description = faker.lorem.paragraphs();
const amenities = 'Lots of amenities';
const rules = faker.lorem.paragraph();
const cancellation = faker.lorem.sentence();
const related1 = 'House 1 down the street';
const related2 = 'House 2 down the street';
const related3 = 'House 3 down the street';
const location = faker.address.latitude();
const nearbyCities = `${faker.address.city()}, ${faker.address.city()}, ${faker.address.city()}`;

for (let i = 0; i < 100; i += 1) {
  pool.query(`INSERT INTO listing_info (name, city, avatar, owner, owner_type, guests, beds, rooms, baths, description, amenities, rules, cancellation, related1, related2, related3, location, nearbyCities) VALUES (${name}, ${city}, ${avatar}, ${owner}, ${ownerType}, ${guests}, ${beds}, ${rooms}, ${baths}, ${description}, ${amenities}, ${rules}, ${description}, ${cancellation}, ${related1}, ${related2}, ${related3}, ${location}, ${nearbyCities} )`);
}
// ASYNC BROKE THIS

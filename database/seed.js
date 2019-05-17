const faker = require('faker');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'localhost',
  database: 'listing_info',
  password: 'connorhoman',
});

let name = 'The Cabin';
let city = faker.address.city();
let avatar = faker.image.avatar();
let owner = `${faker.name.firstName()} ${faker.name.lastName()}`;
let owner_type = 'Verified';
let guests = Math.floor(Math.random() * 10);
let beds = Math.floor(Math.random() * 5);
let rooms = Math.floor(Math.random() * 4);
let baths = Math.floor(Math.random() * 3);
let description = faker.lorem.paragraphs();
let amenities = 'Lots of amenities';
let rules = faker.lorem.paragraph();
let cancellation = faker.lorem.sentence();
let related1 = 'House 1 down the street';
let related2 = 'House 2 down the street';
let related3 = 'House 3 down the street';
let location = faker.address.latitude();
let nearbyCities = faker.address.nearbyCities();

for (var i = 0; i < 100; i++) {
  db.query(`INSERT INTO listing_info (name, city, avatar, owner, owner_type, guests, beds, rooms, baths, description, amenities, rules, cancellation, related1, related2, related3, location, nearbyCities) VALUES ('The Cabin',${city}, ${name}, ${avatar}, ${owner}, ${owner_type}, ${guests}, ${beds}, ${rooms}, ${baths}, ${description}, ${amenities}, ${rules}, ${description}, ${} )`)
}
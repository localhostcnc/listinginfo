/* eslint-disable max-len */
const faker = require('faker');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'connorhoman',
  host: 'postgres',
  database: 'postgres',
  password: 'connorhoman',
  port: 5432,
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
  'Take in a Dip in the Heated Pool at a Luxury SoCo Retreat'];
const ownerTypes = ['Verified', 'none', 'Plus'];
const responseTypes = ['weeks', 'hours', 'months'];
const cities = ['Barcelona', 'New York', 'Tokyo',
  'Austin', 'Westwood', 'San Francisco', 'Oakland',
  'San Diego', 'Honolulu', 'Punta Cana, Dominican Republic',
  'Miami', 'Buenos Aires', 'Lima', 'Dallas', 'Phoenix',
  'Grand Rapids', 'Seattle', 'Portland', 'Boise', 'Madrid', 'Munich',
  'Dublin', 'London'];
const bedTypes = ['single', 'double', 'queen', 'king', 'sofa'];
const descriptions = ['This is a quaint cabin tucked in the trees on the east shore of Lake Almanor. The warm, shallow water makes it perfect for little ones to play or hook up to a bouy to just float. Can hook a boat to the outter bouy as well. Beach is used only by neighbors so it’s quiet. There’s also a picnic table and fire pit for s’mores. Town of Chester is 10 minutes away with shops, dining, rentals, parks and soft swirl ice cream, a must! A couple hiking trails are out front door and across the street.  The spaceThe main living area is cozy and there’s a family size picnic table perfect for meals or family games. Two bedrooms off kitchen with full bath and laundry facilities. Upstairs is a loft with small library and a curtained off queen bed with half bath. Our deck is large and the perfect spot for a glass of wine or beer while you BBQ and watch the sunset over Mt. Lassen, we’re 100 feet from lakes edge. Once the sun goes down there’s string lights and a fire top table with comfortable chairs to enjoy the cool evening air. The kitchen is fully stocked with cooking utensils and plastic ware for kids. The house comfortably sleeps 6 but there’s a pull out couch for 2 more and space in the loft for an air mattress. You can also pitch a tent in front of the deck for more sleeping space. We also offer beach towels, chairs, loungers, umbrellas, two kayaks and a paddle boat for your enjoyment.Interaction with guests. We are available by phone to answer any questions but have the most fabulous neighbors who are extremely friendly and full of great information.',
  'Prime location with parking. Walking distance to UCLA. Minutes from Santa Monica, Venice, Hollywood and other tourist attractions. Full kitchen with appliances, A/C unit, and Wi-Fi.The spaceIf you are visiting Los Angeles and looking to be in a prime location within close proximity to the citys touristic attractions and famous beaches, my renovated studio in the heart of Westwood is the choice for you.My unit is on the third (top floor) of the building so there is a beautiful skyline view from the three large windows. These windows bring lots of bright natural light, but if you choose to cover them each window has a retractable shade. There is also a skylight in the kitchen and bathroom ceilings for more natural light.I have a queen sized bed (med-firm foam mattress) which sleeps two people comfortably. If you have a third guest, I can also provide an extra single sleeper bed upon request.There is a full kitchen complete with stainless steel appliances, dish ware and utensils if you would like to prepare your own meals.There is also a medium sized desk and wi-fi available for use if you need to get any work done during your stay.I have an in-unit AC/Heater, but you are welcome to open the windows if you wish.I provide one assigned parking space. The space may be tight for larger vehicles.The UCLA campus is 1.1 miles away- 6 to 7 minute car ride- 8 minute bike ride- 18 minute UCLA Blue Bus ride- 25 minute walkGuest accessGuests will be able to utilize the entire studio apartment privately.Interaction with guestsPlease feel free to shoot me a message prior.',
  'The space. Una habitación doble en un apartamento tranquilo situada en un edificio histórico que data de la época medieval. A pocos metros se situan el Museo Picasso, boutiques independientes, galerías de arte, talleres de artistas y gran número de edificios representativos de Barcelona. Todo ello en la zona del Borne conocido por la gran cantidad de bares y restaurantes de moda que contiene.Cuando el clima lo permita se puede disfrutar en la terraza privada, que por supuesto estará a disposición de los huéspedes durante su estancia, resulta un lugar ideal para leer un libro o tomar una copa de vino después de un día de turismo.Varias estaciones de metro y paradas de autobuses están muy cerca, sin embargo la mayoría de las atracciones turísticas se encuentran a corta distancia, la catedral, Santa Maria del Mar, las playas y las Ramblas se encuentran a menos de 10 minutos.El Vaixell de papel (El barco de papel) - quiere significar algo tan frágil y al mismo tiempo capaz de una gran fortaleza!Other things to notePlease note that there will be a €40 charge payable in cash for check-ins later than 23:00pm',
];
const cancellations = ['Strict - Free cancellation for 48 hours', 'After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.'];
const rules = ['Not safe or suitable for infants (under 2 years) and pets', 'No smoking, parties, or events', 'Check-in is anytime after 4PM and check out by 12PM (noon)', 'Shoes off at door', 'No outside guests'];

for (let i = 0; i < 100; i += 1) {
  const name = names[Math.floor(Math.random() * names.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const avatar = faker.image.avatar();
  const owner = faker.name.firstName();
  const ownertype = ownerTypes[Math.floor(Math.random() * ownerTypes.length)];
  const guests = Math.floor(Math.random() * 8) + 1;
  const beds = Math.floor(Math.random() * 6) + 1;
  const rooms = Math.floor(Math.random() * 4) + 1;
  const baths = Math.floor(Math.random() * 3) + 1;
  const bedType1 = bedTypes[0];
  const bedType2 = bedTypes[Math.floor(Math.random() * bedTypes.length)];
  const bedType3 = bedTypes[Math.floor(Math.random() * bedTypes.length)];
  const bedType4 = bedTypes[4];
  const responserate = Math.floor(Math.random() * 100);
  const responseType = responseTypes[Math.floor(Math.random() * responseTypes.length)];
  const description1 = descriptions[Math.floor(Math.random() * descriptions.length)];
  const description2 = descriptions[Math.floor(Math.random() * descriptions.length)];
  const description3 = descriptions[Math.floor(Math.random() * descriptions.length)];
  const amenities = Math.floor(Math.random() * 40);
  const location1 = descriptions[Math.floor(Math.random() * descriptions.length)].slice(0, 100);
  const location2 = descriptions[Math.floor(Math.random() * descriptions.length)].slice(0, 100);
  const location3 = descriptions[Math.floor(Math.random() * descriptions.length)].slice(0, 100);
  const rules1 = rules[Math.floor(Math.random() * rules.length)];
  const rules2 = rules[Math.floor(Math.random() * rules.length)];
  const rules3 = rules[Math.floor(Math.random() * rules.length)];
  const rules4 = rules[Math.floor(Math.random() * rules.length)];
  const cancellation1 = cancellations[0];
  const cancellation2 = cancellations[Math.floor(Math.random() * cancellations.length)];
  const cancellation3 = rules[Math.floor(Math.random() * rules.length)];
  const cancellation4 = rules[Math.floor(Math.random() * rules.length)];
  const query = `INSERT INTO listing_info (name, city, avatar, owner, ownerType, guests, beds, rooms, baths, bedType1, bedType2, bedType3, bedType4, responseRate, responseType, description1, description2, description3, amenities, location1, location2, location3, rules1, rules2, rules3, rules4, cancellation1, cancellation2, cancellation3, cancellation4) VALUES ('${name}', '${city}', '${avatar}', '${owner}', '${ownertype}', ${guests}, ${beds}, ${rooms}, ${baths}, '${bedType1}', '${bedType2}', '${bedType3}', '${bedType4}', ${responserate}, '${responseType}', '${description1}', '${description2}', '${description3}', ${amenities}, '${location1}', '${location2}', '${location3}', '${rules1}', '${rules2}', '${rules3}', '${rules4}', '${cancellation1}', '${cancellation2}', '${cancellation3}', '${cancellation4}')`;

  pool.query(query, (err) => {
    if (err) {
      throw err;
    }
  });
}

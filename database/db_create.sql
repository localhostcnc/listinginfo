CREATE TABLE listing_info(
  listing_id serial PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  avatar TEXT NOT NULL,
  owner TEXT NOT NULL,
  ownertype TEXT NOT NULL,
  guests INT NOT NULL,
  beds INT NOT NULL,
  rooms INT NOT NULL,
  baths INT NOT NULL,
  bedType1 TEXT NOT NULL,
  bedType2 TEXT NOT NULL,
  bedType3 TEXT NOT NULL,
  bedType4 TEXT NOT NULL,
  responserate INT NOT NULL,
  responsetype TEXT NOT NULL,
  description1 TEXT NOT NULL,
  description2 TEXT NOT NULL,
  description3 TEXT NOT NULL,
  amenities INT NOT NULL,
  location1 TEXT NOT NULL,
  location2 TEXT NOT NULL,
  location3 TEXT NOT NULL,
  rules1 TEXT NOT NULL,
  rules2 TEXT NOT NULL,
  rules3 TEXT NOT NULL,
  rules4 TEXT NOT NULL,
  cancellation1 TEXT NOT NULL,
  cancellation2 TEXT NOT NULL,
  cancellation3 TEXT NOT NULL,
  cancellation4 TEXT NOT NULL
 );

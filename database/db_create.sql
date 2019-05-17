CREATE TABLE listing_info(
 listing_id serial PRIMARY KEY,
 name TEXT NOT NULL,
 city TEXT NOT NULL,
 avatar TEXT NOT NULL,
 owner TEXT NOT NULL,
 ownerType TEXT NOT NULL,
 guests INT NOT NULL,
 beds INT NOT NULL,
 rooms INT NOT NULL,
 baths INT NOT NULL,
 description TEXT NOT NULL,
 amenities TEXT NOT NULL,
 rules TEXT NOT NULL,
 cancellation TEXT NOT NULL,
 related1 TEXT NOT NULL,
 related2 TEXT NOT NULL,
 related3 TEXT NOT NULL,
 location TEXT NOT NULL,
 nearbyCities TEXT NOT NULL
 );

 

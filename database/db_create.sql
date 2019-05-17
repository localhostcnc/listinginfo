CREATE TABLE listing_info(
 listing_id serial PRIMARY KEY,
 name VARCHAR (50)  NOT NULL,
 city VARCHAR (50) NOT NULL,
 avatar VARCHAR (50) NOT NULL,
 owner VARCHAR (50)  NOT NULL,
 owner_type VARCHAR (50) NOT NULL,
 guests INT NOT NULL,
 beds INT NOT NULL,
 rooms INT NOT NULL,
 baths INT NOT NULL,
 description TEXT NOT NULL,
 amenities TEXT NOT NULL,
 sleeping TEXT NOT NULL,
 rules TEXT  NOT NULL,
 cancellation TEXT NOT NULL,
 related1 TEXT NOT NULL,
 related2 TEXT NOT NULL,
 related3 TEXT NOT NULL,
 location VARCHAR (50) NOT NULL,
 nearbyCities TEXT NOT NULL
 );

 

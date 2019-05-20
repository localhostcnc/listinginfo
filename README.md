# localhostBnB

> We are rebuilding an AirBnB listing page from scratch

## Related Projects (other services)

  - https://github.com/localhostcnc/top-image-bar
  - https://github.com/localhostcnc/reviewList-ak
  - https://github.com/localhostcnc/calendar-component-kt
  - https://github.com/localhostcnc/booking-info-service-jeff

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Server: NPM start (nodemon)
> Webpack: NPM run webpack
> Database: 1) brew install postgresql (Install postgres)
            2) brew services start postgresql (Start postgres)
            3) createdb listing_info (Create DB)
            4) psql listing_info (Use DB)
            5) \i /Users/connorhoman/Desktop/listinginfo/database/db_create.sql {substitute w/ your file path} (Create Table)
            6) \q (To exit psql shell)
            7) NPM run seed

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Postgresql 11.3

## Development

- React/Styled Components front-end
- Express/PostgresQL back-end 
- Jest/Enzyme/CircleCI testing
- Webpack/ESLint compiling

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


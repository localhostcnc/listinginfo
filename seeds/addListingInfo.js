exports.seed = (knex) => {
  knex('listing_info').del()
    .then(() => {
      knex('listing_info').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' },
      ]);
    });
};

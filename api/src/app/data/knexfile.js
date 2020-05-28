// Update with your config settings.
module.exports = {
  production: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    useNullAsDefault: true
  }
};

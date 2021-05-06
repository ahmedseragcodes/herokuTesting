// Update with your config settings.

const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: './dev.sqlite3',
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool:{
    afterCreate: (conn,done)=>{
      conn.run("PRAGMA foreign_keys = ON", done)
    },
}
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: './dev.sqlite3'
    }
  },
  production: {
   ...sharedConfig,
   connection: {
    filename: './dev.sqlite3'
  }
  }

};

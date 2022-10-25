module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ap-southeast.connect.psdb.cloud'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'my-memories-db'),
      user: env('DATABASE_USERNAME', 'wmtv3z3eqvfzu0iadcpe'),
      password: env('DATABASE_PASSWORD', 'pscale_pw_HXLEk4vTKi4PxHvzYNCNKbsNq4UBRbcW4noYySNdsrm'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

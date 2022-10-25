const fs = require('fs');
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ap-southeast.connect.psdb.cloud'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'my-memories-db'),
      user: env('DATABASE_USERNAME', '1vqsz4ob66uu32f92kh7'),
      password: env('DATABASE_PASSWORD', 'pscale_pw_HXLEk4vTKi4PxHvzYNCNKbsNq4UBRbcW4noYySNdsrm'),
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      },
    },
  },
});

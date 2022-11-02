module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd7hcq1gp3jgp4hlic2g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_wo3s'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'WzpVcnqdAskIUORFcOSMX4XyrX9fYiWg'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

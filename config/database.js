module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'mezii'),
        username: env('DATABASE_USERNAME', 'mezii'),
        password: env('DATABASE_PASSWORD', 'huyhuy'),
      },
      options: {
        ssl: false,
      },
    },
  },
});
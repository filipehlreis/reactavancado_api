module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "reactavancado"),
      username: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "senha"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});

// export default ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'reactavancado'),
//       user: env('DATABASE_USERNAME', 'strapi'),
//       password: env('DATABASE_PASSWORD', 'senha'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

// export default ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'reactavancado'),
//         username: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'senha'),
//         ssl: {
//           rejectUnauthorized: false
//         }
//       },
//       options: {
//         ssl: true,
//       }
//     },
//   },
// });

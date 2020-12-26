module.exports = {
  HOST: "173.82.106.220",
  USER: "developer",
  PASSWORD: "Passport@1",
  DB: "photography",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
// module.exports = {
//   HOST: "127.0.0.1",
//   USER: "root",
//   PASSWORD: "password",
//   DB: "photography",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

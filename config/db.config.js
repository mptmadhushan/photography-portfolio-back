module.exports = {
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "bb17f03e941c10",
  PASSWORD: "07e5d630",
  DB: "heroku_9a1f4169864646e",
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

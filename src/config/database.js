module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'dockerpg',
  database: 'postgres',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}
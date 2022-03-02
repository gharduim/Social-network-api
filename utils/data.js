const users = [
  "Roberto",
  "Armando",
  "Gustavo",
  "Harduim",
  "Monique",
  "Silva",
  "Wilson",
  "Felipe",
  "Renata",
  "Jose",
  "Daniel",
  "Regis",
  "Cibele",
  "Pedro",
  "Eduardo",
  "Eldib",
  "Leticia",
  "Iolanda",
  "Dennis",
  "Henrique",
  "Danielle",
  "Isabella",
];

const makeUsers = () => {
  const usernames = [];
  for (let i = 0; i < users.length; i++) {
    usernames.push({
      username: users[i],
      email: `${users[i].toLowerCase()}@gmail.com`,
    })
  }
  return usernames
}

const userData = makeUsers()


module.exports = { userData }

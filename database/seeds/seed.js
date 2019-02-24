const faker = require('faker');

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getRandomDivision = () => {
  const division = ['NFC', 'AFC'];
  const compass = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
  return `${division[getRandomInt(division.length)]} ${compass[getRandomInt(compass.length)]}`;
};

const getRandomTeamLogo = () => {
  const logos = [
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ari.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/atl.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/bal.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/buf.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/car.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/chi.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/cin.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/cle.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/dal.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/den.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/det.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/gb.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/hou.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ind.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/jax.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/kc.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/lar.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/mia.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/min.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ne.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/no.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/nyg.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/nyj.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/oak.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/phi.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/pit.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/lac.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sf.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/sea.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/tb.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/ten.png&h=40&w=40',
    'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/wsh.png&h=40&w=40',
  ];
  return logos[getRandomInt(logos.length)];
};

const generateDataSet = (numOfRecords) => {
  const acc = [];
  for (let i = 0; i < numOfRecords; i++) {
    const team = {
      team_name: `${faker.address.city()} ${faker.random.word()}`,
      division: getRandomDivision(),
      wins: 12,
      losses: 5,
      tie: 0,
      percentage: .31415,
      points_for: 42,
      points_against: 42,
      team_logo: getRandomTeamLogo(),
      link: 'https://www.youtube.com/watch?v=Fg9IjJSSMRQ',
    };
    acc.push(team);
  }
  return acc;
};

exports.seed = knex => {
  knex('standings').del();
  let count = 0;
  const startTime = new Date().getTime();
  for (var i = 1; i <= 100; i++) {
    knex.batchInsert('standings', generateDataSet(10000), 100)
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => knex.batchInsert('standings', generateDataSet(10000), 100))
    .then(() => {
      count++;
      if (count === 100) console.log('10m insertions on ec2 took ', new Date().getTime() - startTime, 'ms');
    });
  }
}

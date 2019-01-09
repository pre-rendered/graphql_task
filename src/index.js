const { GraphQLServer } = require('graphql-yoga');
const { find } = require('lodash');

let marioDetail = {
  vin: '1HGBH41JXMN109186',
  make: 'MK',
  model: 'Pipe Frame',
  year: 2019,
};

let luigiDetail = {
  vin: '3B4HW12W9HM704664',
  make: 'MK',
  model: 'Standard',
  year: 2019,
}

let cars = [
  {
    id: 1,
    title: 'Mario\'s Kart',
    info: marioDetail,
  },
  {
    id: 2,
    title: 'Lugi\'s Kart',
    info: luigiDetail,
  }
];

let idCount = cars.length;

const resolvers = {
  Query: {
    cars: () => cars,
    car: (_parent, args) => {
      return find(cars, { id: args.id });
    }
  },
  Mutation: {
    post: (_parent, args) => {
      const car = {
        id: ++idCount,
        title: args.title,
        info: args.info,
      }
      cars.push(car);
      return car;
    },
    deleteCar: (_parent, args) => {
      const carIndex = cars.map(car => car.id).indexOf(args.id);
      if (carIndex < 0) {
        return 404;
      }
      cars.splice(carIndex, 1);
      return 200;
    },
    updateCar: (parent, args) => {
      const updatedCar = {
        title: args ? args.title : parent.title,
        info: args ? args.info : parent.info,
      }
      const carIndex = cars.map(car => car.id).indexOf(args.id);
      cars.splice(carIndex, 1, updatedCar);
      return updatedCar;
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`))

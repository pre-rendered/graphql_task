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

let vehicles = [
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

let idCount = vehicles.length;

const resolvers = {
  Query: {
    cars: () => vehicles,
    vehicle: (_parent, args) => {
      return find(vehicles, { id: args.id });
    }
  },
  Mutation: {
    post: (_parent, args) => {
      const vehicle = {
        id: ++idCount,
        title: args.title,
        info: args.info,
      }
      vehicles.push(vehicle);
      return vehicle;
    },
    deleteVehicle: (_parent, args) => {
      const vehicleIndex = vehicles.map(vehicle => vehicle.id).indexOf(args.id);
      if (vehicleIndex < 0) {
        return 404;
      }
      vehicles.splice(vehicleIndex, 1);
      return 200;
    },
    updateVehicle: (parent, args) => {
      const updatedVehicle = {
        title: args ? args.title : parent.title,
        info: args ? args.info : parent.info,
      }
      const vehicleIndex = vehicles.map(vehicle => vehicle.id).indexOf(args.id);
      vehicles.splice(vehicleIndex, 1, updatedVehicle);
      return updatedVehicle;
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`))

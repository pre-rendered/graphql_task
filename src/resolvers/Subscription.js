function newCarSubscribe(_parent, _args, context, _info) {
  return context.prisma.$subscribe.car({ mutation_in: ['CREATED'] }).node();
}

function deleteCarSubscribe(_parent, _args, context, _info) {
  return context.prisma.$subscribe.car({ mutation_in: ['DELETED'] }).node();
}

const newCar = {
  subscribe: newCarSubscribe,
  resolve: payload => {
    return payload;
  },
};

const deletedCar = {
  subscribe: deleteCarSubscribe,
  resolve: () => {
    return { status: 200, message: 'OK' };
  },
};

module.exports = {
  newCar,
  deletedCar,
}

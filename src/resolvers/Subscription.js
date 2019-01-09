function newCarSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.car({ mutation_in: ['CREATED'] }).node()
}

const newCar = {
  subscribe: newCarSubscribe,
  resolve: payload => {
    return payload;
  },
}

module.exports = {
  newCar,
}

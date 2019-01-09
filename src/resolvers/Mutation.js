function createCar(_parent, args, context, _info) {
  const { title, vin, make, model, year } = args;

  return context.prisma.createCar({
    title,
    vin,
    make,
    model,
    year
  });
}

function updateCar(_parent, args, context, _info) {
  const { title, vin, make, model, year } = args;
  return context.prisma.updateCar({
    data: {
      title,
      vin,
      make,
      model,
      year
    },
    where: {
      id: args.id
    }
  })
}

function deleteCar(_parent, args, context, _info) {
  return context.prisma.deleteCar({
    id: args.id
  });
}

module.exports = {
  createCar,
  updateCar,
  deleteCar,
}

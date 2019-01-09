function cars(_parent, _args, context, _info) {
  return context.prisma.cars();
}

function car(_parent, args, context, _info) {
  return context.prisma.car({ id: args.id });
}

module.exports = {
  cars,
  car,
}

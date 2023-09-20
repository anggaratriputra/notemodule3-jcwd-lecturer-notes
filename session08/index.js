const { User, Product } = require("./models");
const { Op } = require("sequelize");

async function create() {
  const result = await User.bulkCreate([
    {
      username: "jaka",
      email: "jaka@mail.com",
      password: "gembung123!",
      name: "Jaka Tarub",
    },
  ]);
  console.log(result.get({ plain: true }));
  return;
}

async function getAll() {
  const result = await User.findAll({
    attributes: {
      exclude: ["password"],
    },
    where: {
      username: {
        [Op.like]: "%%",
      },
    },
    raw: true,
  });
  console.log(result);
  return;
}

async function update() {
  const user = await User.findOne({
    where: {
      username: "jaka",
    },
  });
  user.name = "Jaak Rutab";
  console.log(user);
  await user.save();
  return;
}

async function deleteData() {
  const result = await User.destroy({
    where: {
      id: 3,
    },
  });
  console.log(result);
  return;
}

// relationship
async function getUserWithProduct() {
  const user = await User.findOne({ where: { id: 1 }, include: Product });
  console.log(user.get({ plain: true }));
}

getUserWithProduct();
const { User, Product, Cart } = require("./models");
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

// get data - eager loading
async function getUserWithRelations() {
  const user = await User.findOne({
    where: { id: 1 },
    // include 1 model relasi
    include: Cart,

    // include 1 - banyak  model relasi
    include: [Cart, Product],

    // include 1 model relasi + opsi tambahan
    include: {
      model: Cart,
      where: {
        size: {
          [Op.like]: "%la",
        },
      },
    },

    // include 1 - banyak model relasi + opsi tambahan
    include: [
      {
        model: Cart,
        where: {
          size: {
            [Op.like]: "large",
          },
        },
        include: Product,
      },
      {
        model: Product,
        where: {
          price: {
            [Op.gte]: 5,
          },
        },
      },
    ],
  });

  console.log(user.get({ plain: true }));
}

// get data - lazy loading
async function getUserAndProduct() {
  const user = await User.findOne({
    where: { id: 1 },
  });
  console.log(user.name);
  console.log(user.email);
  console.log(user.username);

  if (user.username === "jaka") {
    const cart = await user.getCart();
    console.log(cart);
  }
}

getUserAndProduct();

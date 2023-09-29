import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("--", email);

    if (!email) {
      return res.json({ msg: "email is required", status: false });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.json({ msg: "user not found", status: false });
    } else {
      return res.json({ msg: "user found", status: true, data: user });
    }
  } catch (e) {
    console.log("err", e);
    next(e);
  }
};

export const onBoardUser = async (req, res, next) => {
  try {
    const { email, name, about, image: profilePicture } = req.body;
    console.log(req.body);

    if (!email || !name || !profilePicture) {
      return res.json({ message: "email & name is required", status: false });
    }
    const newuser = { email, name, profilePicture, about };
    // const prisma = getPrismaInstance();
    const user = await prisma.user.create({
      data: { ...newuser },
    });

    return res.json({
      msg: "user created successfull",
      status: true,
      user,
    });
  } catch (e) {
    console.log("err", e);

    next(e);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        email: true,
        name: true,
        profilePicture: true,
        about: true,
      },
    });
    console.log("========res==========", users);
    const userGroutByInitialLetter = {};
    users.forEach((user) => {
      const initialLetter = user.name.charAt(0).toUpperCase();
      if (!userGroutByInitialLetter[initialLetter]) {
        userGroutByInitialLetter[initialLetter] = [];
      }
      userGroutByInitialLetter[initialLetter].push(user);
    });
    return res.status(200).send({ users: userGroutByInitialLetter });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

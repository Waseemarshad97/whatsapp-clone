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
    console.log(e);
    next(e);
  }
};

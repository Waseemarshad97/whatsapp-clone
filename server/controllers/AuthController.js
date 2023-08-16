import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("--", email);
    if (!email) {
      return res.json({ msg: "email is required", status: flase });
    }
    const prisma = getPrismaInstance();
    const user = await prisma.User.findUnique({ where: { email } });
    if (!user) {
      return res.json({ msg: "user not found", status: flase });
    } else {
      return res.json({ msg: "user found", status: true, data: user });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

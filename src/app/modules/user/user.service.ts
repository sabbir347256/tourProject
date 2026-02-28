import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email } = payload;
  const user = await User.create({
    name: name as string,
    email: email as string,
  });

  return user;
};

export const userServices = {
  createUser,
};

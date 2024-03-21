import jwt from "jsonwebtoken";

// Define a User interface to specify the shape of the user object.
export interface ContextInterface {
  // Define the properties of your user object here.
  // For example:
  oid: string;
  loginId: string;
  email: string;
  iat: number;
  exp: number;
}

const getUser = async (token: string): Promise<ContextInterface | null> => {
  try {
    if (token) {
      const user = jwt.verify(token, process.env.JWT_SECRET!) as ContextInterface; 
      return user;
    }

    return null;
  } catch (error) {
    return null;
  }
};


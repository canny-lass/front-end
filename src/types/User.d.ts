import Id from "./Id";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  address?: Address;
  id?: Id
};

export default User;

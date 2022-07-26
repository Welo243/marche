import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin",
    email :"admin@exemple.com",
    password:bcrypt.hashSync("12345678",10),
    isAdmin:true
  },

  {
    name: "User",
    email :"user@exemple.com",
    password:bcrypt.hashSync("12345678",10),
    isAdmin:false
  },

];

export default users;

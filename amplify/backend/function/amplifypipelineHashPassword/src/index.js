const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
  // get password field from input
  const { password } = event.arguments.input;
  // use bcrypt to hash password
  const hash = await bcrypt.hash(password, 10);
  // return the hashed password as response
  return {
    hash,
  };
};

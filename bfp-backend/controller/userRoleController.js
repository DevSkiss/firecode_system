const UserRole = require("../model/UserRole");

//get all user roles
module.exports.get = () => {
  return UserRole.find({}).then((result) => result);
};

//get a specific roles for one user
module.exports.getUser = (params) => {
  return UserRole.find({ userId: params.userId }).then((result) => result);
};

//create a user role
module.exports.createUserRole = (params) => {
  let newUserRole = new UserRole({
    role: params.role,
    userId: params.userId,
    name: params.name,
  });
  return newUserRole.save().then((userRole, err) => (err ? false : true));
};

//update a 1 user role
module.exports.updateUserRole = (params) => {
  let updateUserRole = {
    role: params.role,
  };
  return UserRole.findByIdAndUpdate(
    params.userRoleId,
    updateUserRole
  ).then((userRole, err) => (err ? false : true));
};

//delete a  1 user role
module.exports.deleteUserRole = (params) => {
  return UserRole.findByIdAndRemove(params.userRoleId).then((userRole, err) =>
    err ? false : true
  );
};

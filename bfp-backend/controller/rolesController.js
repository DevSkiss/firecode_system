const Roles = require("../model/Roles");

//read roles
module.exports.getAll = () => {
  return Roles.find({}).then((result) => result);
};

module.exports.getAll = () => {
  return Roles.find({}).then((result) => result);
};

//create roles
module.exports.createRoles = (params) => {
  let newRole = new Roles({
    role: params.role,
  });
  return newRole.save().then((role, err) => (err ? false : true));
};

//update roles
module.exports.updateRole = (params) => {
  let updateRole = {
    role: params.role,
  };
  return Roles.findByIdAndUpdate(params.roleId, updateRole).then((role, err) =>
    err ? false : true
  );
};

//delete roles
module.exports.deleteRole = (params) => {
  return Roles.findByIdAndRemove(params.roleId).then((role, err) =>
    err ? false : true
  );
};

const User = require("../model/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

//Check if email exist
module.exports.emailExists = async (params) => {
  const result = await User.find({ email: params.email });
  return result.length > 0 ? true : false;
};
//check if username eixst
module.exports.usernameExists = async (params) => {
  const result = await User.find({ username: params.username });
  return result.length > 0 ? true : false;
};
//number exists
module.exports.numberExists = async (params) => {
  const result = await User.find({ mobileNo: params.mobileNo });
  return result.length > 0 ? true : false;
};

//registration
module.exports.register = async (params) => {
  let newUser = new User({
    firstname: params.firstname,
    lastname: params.lastname,
    email: params.email,
    rank: params.rank,
    address: params.address,
    municipality: params.municipality,
    province: params.province,
    station: params.station,
    mobileNo: params.mobileNo,
    username: params.username,
    password: bcrypt.hashSync(params.password, 15),
    isAdmin: params.isAdmin,
  });
  let result = await newUser.save();
  return result ? true : false;
};

//update user details
module.exports.updateUser = async (params) => {
  let updatedUser = {
    rank: params.rank,
    firstname: params.firstname,
    lastname: params.lastname,
    mobileNo: params.mobileNo,
    station: params.station,
    address: params.address,
    province: params.province,
    municipality: params.municipality,
  };
  const result = await User.findByIdAndUpdate(params.userId, updatedUser);
  return result ? true : false;
};

//login
module.exports.login = async (params) => {
  const result = await User.findOne({ username: params.username });
  if (result == null) {
    return false;
  }
  const isPasswordMatched = bcrypt.compareSync(
    params.password,
    result.password
  );
  if (isPasswordMatched) {
    return { access: auth.createAccessToken(result) };
  } else {
    return false;
  }
};

module.exports.changePassword = async (params) => {
  let res;
  const result = await User.findOne({ username: params.username });
  if (result == null) {
    return false;
  }

  const isPasswordMatched = bcrypt.compareSync(
    params.password,
    result.password
  );
  console.log(isPasswordMatched);

  if (isPasswordMatched) {
    let newPassword = {
      password: bcrypt.hashSync(params.newPassword, 15),
    };
    res = await User.findByIdAndUpdate(params.userId, newPassword, {
      useFindAndModify: true,
    });
  }
  return res ? true : false;
};

//details

module.exports.singleDetail = async (params) => {
  const result = await User.findById(params.userId);
  result.password = undefined;
  return result;
};

module.exports.details = async (params) => {
  const result = await User.findById(params.userId);
  result.password = undefined;
  return result;
};

module.exports.getAllUser = async () => {
  const result = await User.find({});
  result.password = undefined;
  return result;
};

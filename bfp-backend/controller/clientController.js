const Client = require("../model/Client");

//View All active Clients
module.exports.getAllActive = async () => {
  const result = await Client.find({ isActive: true });
  return result;
};

//view all clients weather active or notlt
module.exports.getAll = async () => {
  const result = await Client.find({});
  return result;
};

//Add new clients
module.exports.add = (params) => {
  let newClient = new Client({
    ownerName: params.ownerName,
    nameOfEstablishment: params.nameOfEstablishment,
    locationOfEstablishment: params.locationOfEstablishment,
    natureOfBusiness: params.natureOfBusiness,
    ownerAddress: params.ownerAddress,
    bin: params.bin,
    nameOfContractor: params.nameOfContractor,
    authorizedRepresentative: params.authorizedRepresentative,
    mobileNo: params.mobileNo,
    email: params.email,
    occupancyType: params.occupancyType,
    businessType: params.businessType,
    hazardType: params.hazardType,
    floorArea: params.floorArea,
    floorAreaOccupied: params.floorAreaOccupied,
    noOfStorey: params.noOfStorey,
  });
  return newClient.save().then((client, err) => {
    return err ? false : true;
  });
};

//get a single client
module.exports.getClient = async (params) => {
  const result = await Client.findById(params.clientId);
  return result;
};

//update a single client
module.exports.update = (params) => {
  let updatedClient = {
    ownerName: params.ownerName,
    nameOfEstablishment: params.nameOfEstablishment,
    locationOfEstablishment: params.locationOfEstablishment,
    natureOfBusiness: params.natureOfBusiness,
    ownerAddress: params.ownerAddress,
    bin: params.bin,
    nameOfContractor: params.nameOfContractor,
    authorizedRepresentative: params.authorizedRepresentative,
    mobileNo: params.mobileNo,
    email: params.email,
    occupancyType: params.occupancyType,
    businessType: params.businessType,
    hazardType: params.hazardType,
    floorArea: params.floorArea,
    floorAreaOccupied: params.floorAreaOccupied,
    noOfStorey: params.noOfStorey,
  };
  return Client.findByIdAndUpdate(
    params.clientId,
    updatedClient
  ).then((client, err) => (err ? false : true));
};

//archive client
module.exports.archive = (params) => {
  let archiveUpdate = {
    isActive: false,
  };

  return Client.findByIdAndUpdate(
    params.clientId,
    archiveUpdate
  ).then((client, err) => (err ? false : true));
};

//re-activate client
module.exports.activate = (params) => {
  let activeUpdate = {
    isActive: true,
  };

  return Client.findByIdAndUpdate(
    params.clientId,
    activeUpdate
  ).then((client, err) => (err ? false : true));
};


//update client details
module.exports.updateClientAddtl = async (params) => {
  let client = {
    clientId: params.clientId,
    occupancyType: params.occupancyType,
    businessType: params.businessType,
    hazardType: params.hazardType,
    floorArea: params.floorArea,
    floorAreaOccupied: params.floorAreaOccupied,
    noOfStorey: params.noOfStorey,
  };
  let result = await Client.findByIdAndUpdate(params.clientId, client);
  return result ? true : false;
}
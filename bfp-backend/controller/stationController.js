const Station = require("../model/Station");


//create station
module.exports.create = async (params) => {
    const newStation = new Station({
        name: params.name,
        municipality: params.municipality,
        province: params.province,
    });
    const result = await newStation.save();
    return result ? true : false;
}
//get all station
module.exports.getAll = async() => {
    const result = await Station.find({});
    return result;
}
//get a single station
module.exports.get = async (params) => {
    const result = await Station.findById(params.stationId);
    return result;
}
//update a station
module.exports.update = async (params) => {
    let updateStation = {
        name: params.name,
        municipality: params.municipality,
        province: params.province,
    };
    const result = await Station.findByIdAndUpdate(params.stationId, updateStation);
    return result ? true : false;
}
//delete a station
module.exports.delete = async (params) => {
    const result = await Station.findByIdAndRemove(params.stationId);
    return result ? true : false;
}


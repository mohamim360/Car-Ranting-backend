import { IRent } from "./rent.interface";
import { Rent } from "./rent.model";

const createRent = async (rent: IRent) => {
  return await Rent.create(rent);
};

const updateRentById = async (rentId: string, payload: Partial<IRent>) => {
  const result = await Rent.findByIdAndUpdate(
    {
      _id: rentId,
    },
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

const deleteRentById = async (rentId: string) => {
  const result = await Rent.findByIdAndDelete(rentId);
  return result;
};

const findRentById = async (rentId: string) => {
  return await Rent.findById(rentId);
};

const getAllRents = async () => {
  return await Rent.find().populate("user").populate("car");
};

export const RentService = {
  createRent,
  updateRentById,
  deleteRentById,
  findRentById,
  getAllRents,
};

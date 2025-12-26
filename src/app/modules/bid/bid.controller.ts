import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BidService } from "./bid.service";

const createBid = catchAsync(async (req, res) => {
  const result = await BidService.createBid(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bid is created successfully",
    data: result,
  });
});

const updateBidById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BidService.updateBidById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bid is updated successfully",
    data: result,
  });
});

const deleteBidById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BidService.deleteBidById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bid is deleted successfully",
    data: result && null,
  });
});

const findBidById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BidService.findBidById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bid is retrieved successfully",
    data: result,
  });
});

const getAllBids = catchAsync(async (req, res) => {
  const result = await BidService.getAllBids();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bids are retrieved successfully",
    data: result,
  });
});

export const BidController = {
  createBid,
  findBidById,
  updateBidById,
  deleteBidById,
  getAllBids,
};

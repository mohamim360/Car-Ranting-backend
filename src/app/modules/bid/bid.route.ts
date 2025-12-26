import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BidController } from './bid.controller';
import {
  createBidValidationSchema,
  updateBidValidationSchema,
} from './bid.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../utils/userUtils';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.driver),
  validateRequest(createBidValidationSchema),
  BidController.createBid,
);

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.driver),
  validateRequest(updateBidValidationSchema),
  BidController.updateBidById,
);

router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.driver),
  BidController.deleteBidById,
);

router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.driver),
  BidController.findBidById,
);


export const BidRoutes = router;

import express from "express";
import itemController from "../controllers/item.controller.js";

const router = express.Router();

/* GET items. */
router.get('/items', itemController.getItemList);

/* GET item. */
router.get('/items/:id', itemController.getItem);

export default router;
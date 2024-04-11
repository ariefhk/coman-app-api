import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";
import { ContactController } from "../controller/contact-controller";
import { AddressController } from "../controller/address-controller";

export const privateRouter = express.Router();
privateRouter.use(authMiddleware);

// User APi
privateRouter.get("/api/users/current", UserController.get);
privateRouter.patch("/api/users/current", UserController.update);
privateRouter.delete("/api/users/current", UserController.logout);

// Contact API
privateRouter.post("/api/contacts", ContactController.create);
privateRouter.get("/api/contacts/:contactId(\\d+)", ContactController.get);
privateRouter.put("/api/contacts/:contactId(\\d+)", ContactController.update);
privateRouter.delete("/api/contacts/:contactId(\\d+)", ContactController.remove);
privateRouter.get("/api/contacts", ContactController.search);

// Address API
privateRouter.post("/api/contacts/:contactId(\\d+)/addresses", AddressController.create);
privateRouter.get("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", AddressController.get);
privateRouter.put("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", AddressController.update);
privateRouter.delete("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", AddressController.remove);
privateRouter.get("/api/contacts/:contactId(\\d+)/addresses", AddressController.list);

import express from 'express';
import { getMessage } from '../controller/messageController.js';
const messageRouter = express() ;

messageRouter.get("/get-message" , getMessage) ;

export { messageRouter }
import express from "express";

import serverRenderer from '../middleware/renderer';
import { initStore } from '../../src/store/configureStore';

const router = express.Router();
const path = require("path");


const actionIndex = (req, res, next) => {
    serverRenderer(initStore())(req, res, next);
};


// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', '..', 'build'),
    { maxAge: '30d' },
));

// any other route should be handled by react-router, so serve the index page
router.use('*', actionIndex);


export default router;

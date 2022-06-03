const express = require('express');
const Contact = require('../models/contact');
const cloudinary = require('../utils/cloudinary')
const router = express.Router();
const fs = require('fs');
const upload= require('../middlewares/multer');
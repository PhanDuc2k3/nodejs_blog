const express = require('express');
const route = express.Router();

const newController = require('../app/controllers/newController');
route.use('/:slug', newController.show);

// Route xử lý trang chính của news - Đặt route này lên trước
route.use('/', newController.index);

// Route xử lý các yêu cầu với slug động

module.exports = route;

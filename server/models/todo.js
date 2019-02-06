'use strict';

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	task: String,
	priority: String,
	complete: Boolean,
	type: Number
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;
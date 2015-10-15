
var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
	name: String,
	path: { type: String, default: "" },
	size: { type: Number, default: 0 },
	creator: { type: mongoose.Schema.ObjectId, ref: 'User' },
	hashString: String,
	isFinished: { type: Boolean, default: false },
	downloads: { type: Number, default: 0 },
	privacy : { type: Number, default: 1 },
	// torrent: String, //utile ?
	comments: [{
		text: { type: String, default: '' },
		user: { type: mongoose.Schema.ObjectId, ref: 'User' },
		createdAt: { type: Date, default: Date.now }
	}],
	locked: [{
		user: { type: mongoose.Schema.ObjectId, ref: 'User' },
		createdAt: { type: Date, default: Date.now }
	}],
	grades: [{
		user: { type: mongoose.Schema.ObjectId, ref: 'User' },
		grade: Number
	}],
	createdAt : Date,
	torrentAddedAt : { type: Date, default: Date.now }
});


module.exports = mongoose.model('File', FileSchema);
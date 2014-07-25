var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var showSchema = new Schema({
  _id: Number,
  name: String,
  airsDayOfWeek: String,
  airsTime: String,
  firstAired: Date,
  genre: [String],
  network: String,
  overview: String,
  rating: String,
  ratingCount: Number,
  status: String,
  poster: String,
  subscribers: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }],
  episodes: [{
    season: Number,
    episodeNumber: Number,
    episodeName: String,
    firstAired: Date,
    overview: String
  }]
});

mongoose.model('Show', showSchema);
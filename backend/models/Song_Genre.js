const mongoose = require("mongoose");

const SongGenreSchema = new mongoose.Schema({
  song_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "songs",
    },
  ],
  genre_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "genre",
    },
  ],
});

const SongGenre = mongoose.model("song_genre", SongGenreSchema);
module.exports = SongGenre;

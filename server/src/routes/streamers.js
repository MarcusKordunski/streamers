const { Router } = require("express");
const {
  Streamer,
} = require("../models");

const getAll = async (req, res) => {
  try {
    const streamers = await Streamer.findAll();
    res.status(200).json(streamers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error. " + error });
  }
};

const getOne = async (req, res) => {
  try {
    const streamer = await Streamer.findOne({
      where: { id: req.params.id },
    });
    if (!streamer) {
      return res.status(404).json({ error: "Streamer not found" });
    }
    res.status(200).json(streamer);
  } catch (error) {
    res.status(500).json({ error: "Internal server error. " + error });
  }
};

const createNewStreamer = async (req, res) => {
  try {
    const { name, platform, description } = req.body;
    const newStreamer = await Streamer.create({
      name,
      platform,
      description,
    });
    res.status(201).json(newStreamer);
  } catch (error) {
    res.status(500).json({ error: "Internal server error. " + error });
  }
};


const updateStreamerVote = async (req, res) => {
  try {
    const { id } = req.params;
    const { vote, active } = req.body;

    const streamer = await Streamer.findByPk(id);

    if (!streamer) {
      return res.status(404).json({ error: "Streamer not found" });
    }

    if (vote === "upvote" && active === "upvote") {
      streamer.upvotes -= 1;
    } else if (vote === "downvote" && active === "downvote") {
      streamer.downvotes -= 1;
    } else if (vote === "upvote" && active === "downvote") {
      streamer.upvotes += 1;
      streamer.downvotes -= 1;
    } else if (vote === "downvote" && active === "upvote") {
      streamer.downvotes += 1;
      streamer.upvotes -= 1;
    } else if (vote === "upvote") {
      streamer.upvotes += 1;
    } else if (vote === "downvote") {
      streamer.downvotes += 1;
    }

    await streamer.save();

    res.json(streamer);
  } catch (error) {
    res.status(500).json({ error: "Internal server error. " + error });
  }
};

module.exports = Router()
  .get("/", getAll)
  .get("/:id", getOne)
  .post("/", createNewStreamer)
  .put("/:id/vote", updateStreamerVote)

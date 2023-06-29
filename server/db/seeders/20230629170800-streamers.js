"use strict";

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Streamers", [
      {
        name: "Asmongold",
        platform: "Twitch",
        description:
          "Asmongold, also known as ZackRawrr, is an American Twitch streamer, YouTuber, content creator, internet celebrity, who is recognized for his World of Warcraft gameplay and knowledge of the game, humorous commentary while playing various MMORPGs, and his ability to entertain and engage with his audience. \nAsmongold's content primarily focuses on World of Warcraft, but he has covered other video games and topics related to gaming culture. Asmongold is a co-founder and co-owner of the streaming, gaming, and content creation organization One True King, based in Austin, Texas. Asmongold is also a co-owner of Starforge Systems, a computer company specialized in selling prebuilt gaming PCs.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "xQc",
        platform: "Kick",
        description:
          "xQc, also known as Felix Lengyel, is a popular Twitch streamer and former professional Overwatch player. He is known for his energetic personality, engaging gameplay streams, and humorous commentary. xQc streams a variety of games and has a large and passionate fanbase.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Emiru",
        platform: "Twitch",
        description:
          "Emiru is a Twitch streamer known for her gaming content, primarily focusing on League of Legends. She is known for her skill in the game and her entertaining streams. Emiru also collaborates with other streamers and creates content related to fashion and lifestyle.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "BobRoss",
        platform: "Twitch",
        description:
          "Bob Ross, although not an active Twitch streamer himself, gained immense popularity on the platform through rebroadcasts of his classic art show \"The Joy of Painting.\" Bob Ross was a beloved artist known for his soothing voice, calming presence, and ability to create beautiful landscapes in his paintings.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "DrDisrespect",
        platform: "YouTube",
        description:
          "DrDisrespect, also known as Herschel \"Guy\" Beahm IV, is a Twitch streamer known for his charismatic character and unique style. He presents himself as an over-the-top, mullet-sporting, and sunglass-wearing personality. DrDisrespect streams various games, and his streams are often filled with high energy, comedic moments, and skilled gameplay.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "sodapoppin",
        platform: "Twitch",
        description:
          "Sodapoppin, or Chance Morris, is a popular Twitch streamer known for his entertaining personality and humorous commentary. He streams a variety of games and often engages with his audience through interactive streams and challenges. Sodapoppin's streams are characterized by his funny reactions and engaging community.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Loltyler1",
        platform: "Twitch",
        description:
          "Tyler \"loltyler1\" Steinkamp is a Twitch streamer who gained fame through his League of Legends content. He is known for his energetic and passionate gameplay, often showcasing his intense reactions and loud commentary. Tyler1 has a dedicated following and is known for his entertaining and competitive streams.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Quin69",
        platform: "Twitch",
        description:
          "Quin69, or Quinn Callahan, is a Twitch streamer who focuses on content related to Diablo IV and Path of Exile. He is known for his in-depth knowledge of the games, skillful gameplay, and informative streams. Quin69 provides guides, builds, and analysis for the games he plays, attracting a dedicated community of viewers.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "shroud",
        platform: "Twitch",
        description:
          "Shroud, also known as Michael Grzesiek, is a highly skilled Twitch streamer and former professional CS:GO player. He is renowned for his exceptional aim, reflexes, and strategic gameplay. Shroud streams a variety of games and is recognized for his calm demeanor and impressive gaming abilities.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Greekgodx",
        platform: "Twitch",
        description:
          "Greekgodx, or Dimitri Raymondo Antonatos, is a Twitch streamer known for his entertaining personality and comedic streams. He engages with his audience through interactive content, IRL streams, and gameplay sessions. Greekgodx's streams often feature humorous commentary and interactions with other streamers.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Pokimane",
        platform: "Twitch",
        description:
          "Pokimane, or Imane Anys, is a popular Twitch streamer and content creator known for her gaming streams and engaging personality. She is one of the most followed female streamers on Twitch. Pokimane streams a variety of games, interacts with her community, and has expanded her content to include vlogs and podcasts.",
        upvotes: 0,
        downvotes: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("Streamers", null, {});
  },
};

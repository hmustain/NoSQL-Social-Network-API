const users = [
  {
    username: "hunter",
    email: "hunter@example.com",
  },
  {
    username: "amy",
    email: "amy@example.com",
  },
  {
    username: "barrett",
    email: "barrett@example.com",
  },
  {
    username: "romy",
    email: "romy@example.com",
  },
];

const thoughts = [
  {
    thoughtText: "amy is my wife",
    username: "hunter",
    reactions: [
      {
        reactionBody: "yes i am!",
        username: "amy",
      },
      {
        reactionBody: ":)",
        username: "hunter",
      },
    ],
  },
  {
    thoughtText: "hunter is my husband",
    username: "amy",
    reactions: [
      {
        reactionBody: "yes i am",
        username: "hunter",
      },
      {
        reactionBody: ":)",
        username: "amy",
      },
    ],
  },
  {
    thoughtText: "my name is barrett and I have a twin sister named Romy",
    username: "barrett",
    reactions: [
      {
        reactionBody: "yes you do!",
        username: "romy",
      },
      {
        reactionBody: ":)",
        username: "barrett",
      },
    ],
  },
  {
    thoughtText: "my name is Romy and I have a twin brother named Barrett",
    username: "romy",
    reactions: [
      {
        reactionBody: "you you do!",
        username: "barrett",
      },
      {
        reactionBody: ":)",
        username: "romy",
      },
    ],
  },
];

module.exports = { users, thoughts };

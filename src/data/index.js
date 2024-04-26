const { generatePrefixedID } = require("../utils/");

const STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  DONE: "done",
};

const notes = [
  {
    _id: generatePrefixedID(),
    _id: "123",
    name: "Walk the dog",
    description: "Go to the park",
    important: false,
    status: STATUS.PENDING,
    due_date: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    created_at: Date.now(),
  },
];

module.exports = notes;

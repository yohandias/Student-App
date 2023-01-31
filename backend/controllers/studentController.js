const getStudent = (req, res) => {
  res.status(200).json({ message: "Get All users" });
};

const addUser = (req, res) => {
  const { text, description } = req.body;
  console.log(`text: ${text} and description: ${description}`);
  res.status(200).json({ message: "Create user router" });
};

module.exports = {
  getStudent,
  addUser,
};

let users = [];

export const createUser = (req, res) => {
  const { username, age, email, password } = req.body;
  const id = users.length;
  const user = { id, username, age, email, password };
  users.push(user);
  res.status(200).json({
    code: 200,
    answer: "User profile created successfully!",
    user: { id, username, age },
  });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    const { username, age } = user;
    res.json({ id, username, age });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    const { username, age, email, password } = req.body;
    if (username) user.username = username;
    if (age) user.age = age;
    if (email) user.email = email;
    if (password) user.password = password;
    res.json({ id, username, age });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

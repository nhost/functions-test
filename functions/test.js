module.exports = (req, res) => {
  const { name = "World" } = req.query;
  console.log(
    "This logs should be printed in dev and stored somewhere in prod"
  );
  res.status(200).send(`Hello 123 ${name}!`);
};

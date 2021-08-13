const slugify = require("slugify");

export default (req, res) => {
  const slug = slugify(req.query.slug, {
    strict: true,
    lower: true,
  });
  res.status(200).send(`slug in query params: ${slug}!`);
};

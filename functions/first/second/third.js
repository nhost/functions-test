import slugify from "slugify";

module.exports = (req, res) => {
  const slug = slugify(req.query.slug);
  res.send(`123 - slug in query params: ${slug}!`);
};

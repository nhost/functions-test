import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  console.log(req);
  res
    .status(404)
    .send(`Hi from /johan. Note, this should return 404 status code`);
};

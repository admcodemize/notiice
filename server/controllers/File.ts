import { Request, Response, NextFunction } from "express";

export const create = (req: Request, res: Response, next: NextFunction) => {
    console.log("called");
    res.status(200).json({ test: "" })
}

export const read = (req: Request, res: Response, next: NextFunction) => {

}

export const update = (req: Request, res: Response, next: NextFunction) => {

}

export const remove = (req: Request, res: Response, next: NextFunction) => {

}
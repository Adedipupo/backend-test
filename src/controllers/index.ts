import express, { Request, Response } from "express";
import { location } from "../data/location";
import { priceList } from "../data/price";

export const getData = (req: Request, res: Response) => {
  const { pickup, dropoff, type } = req.body;


  const pickupIndex = location.findIndex((loc) => loc.includes(pickup.toLowerCase()));
  const dropoffIndex = location.findIndex((loc) => loc.includes(dropoff.toLowerCase()));

  const price = priceList[pickupIndex][dropoffIndex];

  if (type.toLowerCase() === "express") {
    const expressPrice = Number(price) * 2;
    return res.status(200).json({ expressPrice });
  }
  if (type.toLowerCase() === "regular") {
    const regularPrice = Number(price) * 1;
    return res.status(200).json({ regularPrice });
  }

  
};

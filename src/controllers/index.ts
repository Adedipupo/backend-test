import express, { Request, Response } from "express";
import { location } from "../data/location";
import { priceList } from "../data/price";

export const getData = (req: Request, res: Response) => {
  const { pickup, dropoff, type } = req.body;

  console.log("i got heere", type)

  const pickupIndex = location.findIndex((loc) => loc.includes(pickup));
  const dropoffIndex = location.findIndex((loc) => loc.includes(dropoff));

  const price = priceList[pickupIndex][dropoffIndex];

  if (type === "express") {
    const expressPrice = Number(price) * 2;
    return res.send(expressPrice);
  }
  if (type === "regular") {
      console.log("i'm working")
    const regularPrice = Number(price) * 1;
    return res.send(regularPrice);
  }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
var location_1 = require("../data/location");
var price_1 = require("../data/price");
var getData = function (req, res) {
    var _a = req.body, pickup = _a.pickup, dropoff = _a.dropoff, type = _a.type;
    console.log("i got heere", type);
    var pickupIndex = location_1.location.findIndex(function (loc) { return loc.includes(pickup); });
    var dropoffIndex = location_1.location.findIndex(function (loc) { return loc.includes(dropoff); });
    var price = price_1.priceList[pickupIndex][dropoffIndex];
    if (type === "express") {
        var expressPrice = Number(price) * 2;
        return res.send(expressPrice);
    }
    if (type === "regular") {
        console.log("i'm working");
        var regularPrice = Number(price) * 1;
        return res.send(regularPrice);
    }
};
exports.getData = getData;

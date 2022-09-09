import { FoodTruck } from "types/foodTruck";
import { Location } from "types/map";

export const filterByOpenTrucks = (trucks: FoodTruck[]) => {
  return trucks.filter((truck) => {
    return truck.status?.toLowerCase() === "approved" ? true : false;
  });
};

// NOTE Geolocation Haversine formula for distance between two points

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export const orderByDistance = (location: Location, trucks: FoodTruck[]) => {
  for (let x = 0; x < trucks.length; x++) {
    trucks[x].distance = getDistanceFromLatLonInKm(
      location.latitude,
      location.longitude,
      parseFloat(trucks[x].latitude),
      parseFloat(trucks[x].longitude)
    );
  }

  return trucks.sort((a: FoodTruck, b: FoodTruck) => {
    if (a.distance && b.distance) {
      return a.distance - b.distance;
    } else {
      return 0;
    }
  });
};

export const findClosestLocation = (
  location: Location,
  trucks: FoodTruck[]
) => {
  const locationAndDistance = {
    location: trucks[0],
    distance: -1,
  };
  for (let x = 0; x < trucks.length; x++) {
    const distance = getDistanceFromLatLonInKm(
      location.latitude,
      location.longitude,
      parseFloat(trucks[x].latitude),
      parseFloat(trucks[x].longitude)
    );

    if (
      Math.abs(distance) < locationAndDistance.distance ||
      locationAndDistance.distance === -1
    ) {
      locationAndDistance.location = trucks[x];
      locationAndDistance.distance = Math.abs(distance);
    }
  }

  return locationAndDistance.location;
};

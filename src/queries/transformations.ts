import { FoodTruck } from "types/foodTruck";

export const filterByOpenTrucks = (trucks: FoodTruck[]) => {
  return trucks.filter((truck) => {
    return truck.status?.toLowerCase() === "approved" ? true : false;
  });
};

interface Location {
  latitude: number;
  longitude: number;
}

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

// NOTE Geolocation Haversine formula for distance between two points on a
function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

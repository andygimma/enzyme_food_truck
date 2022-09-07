import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import styled from "styled-components";
import { FoodTruck } from "types/foodTruck";

const Container = styled.div`
  width: 100%;
`;
interface FoodTruckMapProps {
  trucks: FoodTruck[];
}

const FoodTruckMap = (props: FoodTruckMapProps) => {
  return (
    <Container>
      <MapContainer
        center={[37.773972, -122.431297]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "88vh", borderRadius: 12 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {props.trucks.map((truck, index) => {
          return (
            <Marker
              position={[
                parseFloat(truck.latitude),
                parseFloat(truck.longitude),
              ]}
              key={truck.objectid}
            >
              <Popup>{truck.applicant}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Container>
  );
};

export default FoodTruckMap;

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const FoodTruckMap = () => {
  return (
    <Container>
      <MapContainer
        center={[40.735863, -73.991083]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "80vh", borderRadius: 12 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[40.735863, -73.991083]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default FoodTruckMap;

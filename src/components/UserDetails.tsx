import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import BackIcon from "../assets/backIcon.svg";
import Avatar from "react-avatar";

const styles = {
  back: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 100,
  },
  backIcon: { width: 24, height: 20 },
  headerText: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
} as const;

interface UserListProps {
  user: any;
  setCurrentUser: any;
}

const UserDetails: React.FC<UserListProps> = ({ user, setCurrentUser }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API || "",
  });

  const handleClick = () => {
    setCurrentUser(null);
  };

  return (
    <div style={{ height: "95vh" }}>
      <div style={styles.headerContainer}>
        <div style={styles.back} onClick={handleClick}>
          <img src={BackIcon} alt="back-icon" style={styles.backIcon} />
          <p style={styles.text}>Back</p>
        </div>
        <p style={styles.headerText}>Details</p>
      </div>
      {isLoaded ? (
        <GoogleMap
          center={user.location}
          zoom={11}
          mapContainerStyle={{ width: "100%", height: "50%" }}
        >
          <MarkerF position={user.location} />
        </GoogleMap>
      ) : null}
      {!user.location.lat || !user.location.lng ? (
        <p>Location data not available</p>
      ) : null}
      <div style={{ marginTop: 24, display: "flex", alignItems: "center" }}>
        <Avatar
          name={`${user.name?.first} ${user.name?.last}`}
          size="72px"
          round
          textSizeRatio={1}
          style={{ marginRight: 16 }}
        />
        <div>
          <p style={styles.text}>
            Name: {user.name?.first} {user.name?.last}
          </p>
          <p style={styles.text}>Email: {user.email}</p>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <p style={styles.text}>Fav bear picture :)</p>
        <img
          src={user.picture}
          alt="back-icon"
          style={{ width: 120, height: 120, objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default UserDetails;

import React from "react";
import Avatar from "react-avatar";

const styles = {
  avatar: {
    marginRight: 16,
  },
  email: {
    color: "#888888",
    margin: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    transform: "translateX(-50%)",
    maxWidth: 632,
    left: "50%",
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
    marginBottom: 16,
    padding: 8,
    width: "100%",
    position: "fixed",
  },
  headerText: { fontSize: 20, fontWeight: 600 },
  name: {
    fontSize: 16,
    fontWeight: 500,
    margin: 0,
    lineHeight: 1.5,
  },
  userCard: {
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
    border: "1px solid #ECECEC",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
} as const;

interface UserListProps {
  users: any;
  setCurrentUser: Function;
}

const UserList: React.FC<UserListProps> = ({ users, setCurrentUser }) => {
  return (
    <div>
      <div style={styles.header}>
        <p style={styles.headerText}>All users</p>
      </div>
      {users.length === 0 ? (
        <div style={{ marginTop: 72, textAlign: "center" }}>
          <p style={styles.name}>No data</p>
        </div>
      ) : (
        <div style={{ marginTop: 72 }}>
          {users.map((u: any, i: number) => (
            <div
              key={"user: " + i}
              onClick={() =>
                setCurrentUser({
                  ...u,
                  location: {
                    lat: u.location.latitude,
                    lng: u.location.longitude,
                  },
                })
              }
              style={styles.userCard}
            >
              <Avatar
                name={`${u.name?.first} ${u.name?.last}`}
                round
                size="40px"
                style={styles.avatar}
              />
              <div>
                <p style={styles.name}>
                  {u.name?.first} {u.name?.last}
                </p>
                <p style={styles.email}>{u.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;

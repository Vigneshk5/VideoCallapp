import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    // <div>
    //   <form onSubmit={handleSubmitForm}>
    //     <label style={{ display: "block" }} htmlFor="email">
    //       Email ID
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <label style={{ display: "block" }} htmlFor="room">
    //       Room Number
    //     </label>
    //     <input
    //       type="text"
    //       id="room"
    //       value={room}
    //       onChange={(e) => setRoom(e.target.value)}
    //     />
    //     <button style={{ display: "block" }}>Join</button>
    //   </form>
    // </div>

    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>JOIN ROOM</h2>
          <div className="underline-title"></div>
        </div>
        <form onSubmit={handleSubmitForm} className="form">
          <label htmlFor="email">Username</label>

          <input
            className="form-content"
            type="text"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-border"></div>
          <label htmlFor="room">Room No</label>
          <input
            className="form-content"
            type="text"
            id="room"
            value={room}
            required
            onChange={(e) => setRoom(e.target.value)}
          />
          <div className="form-border"></div>
          <button id="submit-btn" type="submit" name="submit" value="LOGIN">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;

import React, { useCallback, useState } from "react";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({ email, room });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label style={{ display: "block" }} htmlFor="email">
          Email ID
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={{ display: "block" }} htmlFor="room">
          Room Number
        </label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button style={{ display: "block" }}>Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;

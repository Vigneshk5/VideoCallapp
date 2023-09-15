import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`${email}`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    return () => {
      socket.off("user:joined", handleUserJoined);
    };
  }, [socket, handleUserJoined]);

  return (
    <div>
      room
      <h4>{remoteSocketId ? "connected" : "no user found"}</h4>
      <h4>{remoteSocketId && <button onClick={handleCallUser()}>CALL</button>}</h4>
    </div>
  );
};

export default RoomPage;

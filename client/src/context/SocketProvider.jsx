import { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

const serverKey = import.meta.env.VITE_SERVER_API;
export const SocketProvider = (props) => {
  const socket = useMemo(() => io(`${serverKey}`), []);
  return (
    <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>
  );
};

import React, { createContext } from "react";

const SocketContext = createContext(null);

export const SocketProvider = (props)=>{
    return(
        <SocketContext.Provider value={}>
            {props.children}
        </SocketContext.Provider>
    )
}
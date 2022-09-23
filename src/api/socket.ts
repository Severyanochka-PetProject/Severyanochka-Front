import io from "socket.io-client";

const ENDPOINT = "http://localhost:5605/";

export const socket = io(ENDPOINT, {
    withCredentials: true,
    autoConnect: false
});

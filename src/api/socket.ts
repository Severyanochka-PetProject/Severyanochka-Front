import io from "socket.io-client";

// http://localhost:5605/
// https://tankistpro-food.ru/
const ENDPOINT = "https://tankistpro-food.ru/";

export const socket = io(ENDPOINT, {
    withCredentials: true,
    autoConnect: false,
    transports: ["websocket"],
    auth: (cb) => {
        cb({
            token: localStorage.getItem("access") || ""
        });
    }
});

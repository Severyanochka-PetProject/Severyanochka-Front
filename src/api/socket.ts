import io from "socket.io-client";

const ENDPOINT = "https://tankistpro-food.ru/wss";

export const socket = io(ENDPOINT, {
    withCredentials: true,
    autoConnect: false
});

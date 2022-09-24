import io from "socket.io-client";

const ENDPOINT = "https://tankistpro-food.ru/";

export const socket = io(ENDPOINT, {
    withCredentials: true,
    autoConnect: false
});

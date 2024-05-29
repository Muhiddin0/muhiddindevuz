import axios from "axios";

export const instance = axios.create({
    baseURL: "http://195.161.68.240:1000/",
});

// /moderator/1/projects/1/increment

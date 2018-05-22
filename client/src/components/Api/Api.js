import axios from "axios";

const getSingleUser = username => axios.get(`/users/${username}`);

const getLogout = () => axios.get("/auth/logout");

export default {
    getSingleUser,
    getLogout
};

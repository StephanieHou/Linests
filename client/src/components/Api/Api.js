import axios from "axios";

const getSingleUser = username => axios.get(`/users/${username}`);

const getFriendsByUser = id => axios.get(`/api/friends/${id}`);

const getInterests = () => axios.get(`/api/interests`)

const getLogout = () => axios.get("/auth/logout");


export default {
    getSingleUser,
    getFriendsByUser,
    getInterests,
    getLogout
};

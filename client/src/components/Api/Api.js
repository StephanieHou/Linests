import axios from "axios";

const getSingleUser = username => axios.get(`/users/${username}`);

const getFriendsByUser = id => axios.get(`/api/friends/${id}`);

const deleteInterestsByUser = id => axios.delete(`/api/interests/${id}`);

const getInterests = () => axios.get(`/api/interests`)

const getChatMessages = (id, otherid) => axios.get(`/api/chatroom/${id}/${otherid}`);

const getLogout = () => axios.get("/auth/logout");


export default {
    getSingleUser,
    getFriendsByUser,
    deleteInterestsByUser,
    getInterests,
    getChatMessages,
    getLogout
};

import axios from "axios";
import {useNavigate} from "react-router-dom";


export const baseUrl = "http://localhost:8080"

export const apis = {
    login : `${baseUrl}/auth/login`,
    signup : `${baseUrl}/auth/register`,
    usernameCheck: `${baseUrl}/auth/check-username`,
    emailCheck: `${baseUrl}/auth/check-email`,
    getUserDetails: `${baseUrl}/get-details`,
    getTotalAuctions: `${baseUrl}/auction/get-numbers`,
    getTotalAuctionsOfUser: `${baseUrl}/auction/get-numbers-user`,
    getAllAuctions:`${baseUrl}/auction/get-all`,
    getCountRegisteredAuctions: `${baseUrl}/auction/get-all-registered`
}

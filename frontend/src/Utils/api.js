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
    getAllCompletedAuction: `${baseUrl}/auction/get-all-completed`,
    getCountRegisteredAuctions: `${baseUrl}/auction/get-all-registered`,
    createAuction: `${baseUrl}/auction/create-auction`,
    getAuctionById: `${baseUrl}/auction/get-by-id`,
    checkUserRegistration: `${baseUrl}/auction/check-reg`,
    userRegistration: `${baseUrl}/auction/register-user`,
    getAllAuctionOfUser: `${baseUrl}/auction/get-all-by-user`,
    getAllCompletedAuctionOfUser: `${baseUrl}/auction/get-all-completed-by-user`,
    getAllUpdates: `${baseUrl}/updates/get-all-update`,
    getProductByAuctionId: `${baseUrl}/product/get-by-auction-id`,
    getCurrentBidInitially: `${baseUrl}/bidding/get-initial`,
    liveSocketSubscribe: `/topic/return-to`,
    liveSocketSend: '/app',
    getCloseBid: `${baseUrl}/bidding/get-close`,
    postCloseBid: `${baseUrl}/bidding/make-close`,
    changeAuctionStatus: `${baseUrl}/auction/change-status`,
    getAllCloseBids: `${baseUrl}/bidding/close/get-all-bid`,

}

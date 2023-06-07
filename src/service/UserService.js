import axios from "./customizeAxios";
//bcus customizeAxios just export 1 var so that we can rename while import (axios)

const fetchAllUser=(page)=>{
    return axios.get(`/api/users?page=${page}`)
}

export {fetchAllUser}
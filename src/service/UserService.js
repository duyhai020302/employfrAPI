import axios from "./customizeAxios";
//bcus customizeAxios just export 1 var so that we can rename while import (axios)

const fetchAllUser=(page)=>{
    return axios.get(`/api/users?page=${page}`)
}

const createNewUser=(name,job)=>{
    return axios.post('api/users',{
        name:name,
        job:job
    })
}

export {fetchAllUser, createNewUser}
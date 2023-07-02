import axios from "axios"

let accessToken= localStorage.getItem('accessToken')
console.log(accessToken)
const tokenExpireDate=localStorage.getItem('tokenExpireDate');
const refreshToken=localStorage.getItem('refreshToken');
const now= Date.now();
if (now > tokenExpireDate){
    accessToken=refreshToken
}

const AXIOS= axios.create({
    baseURL: 'http://localhost:3000/api',
    headers:{
        "Content-Type": "application/json; charset=UTF-8",
        "x-auth-token": accessToken,
    }
})
export default AXIOS;


import axios from "axios";


class AuthServices{
    Register = async (payload)=>{
        axios.post('https://book-e-sell-node-api.vercel.app/api/user',payload);
    };
    
}
//ealint-disable-next--line-import/no-anonymous-default-export
export default new AuthServices();
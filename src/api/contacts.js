import axios from 'axios';

export default axios.create({
    baseURL:'https://contact-manager-648dc-default-rtdb.firebaseio.com'
})
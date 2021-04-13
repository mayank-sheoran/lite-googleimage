import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization : 'Client-ID z9_sv2fsIz8ZbZf1Er8Ow8DGM2IY24Tdtw9GsBMET8g'
    }
}
);

export default instance;
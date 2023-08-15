import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5'
})

export const buscar = async (url, setData) => {
    // json-server --watch .\db.json --port=5
    const respuesta = await api.get(url);
    console.log(respuesta);
    setData(respuesta.data);
}
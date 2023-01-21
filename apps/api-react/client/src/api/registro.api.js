import axios from "axios"

export const createRegistroRequest = async (registro) => {
    return await axios.post("http://localhost:4000/api/registro", registro)
}
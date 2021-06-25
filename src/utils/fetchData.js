import api from "../services/api"

async function fecthData(pathName) {   
    return await api.get(pathName) 
}

export default fecthData

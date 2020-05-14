const axios = require('axios');

const getLugarLat = async (dirs) => {
    const resp =  await axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '202277a167msh56366d923f389a7p101dc1jsn950f80e9decb'
        },
        params: {
            'location': encodeURI(dirs)
        }
    });
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dirs}`);
    }
    const {name : direccion, lat, lon: lng} = resp.data.Results[0];
    return {
        direccion,
        lat, 
        lng
    }
}

module.exports = {
    getLugarLat
}

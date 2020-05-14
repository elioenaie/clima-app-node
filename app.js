
const {getLugarLat} = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
    alias: 'd',
    desc: 'Dirección de la cuidad para obtener el clima',
    demand: true
    }
}).argv;

console.log(encodeURI(argv.direccion))
// getLugarLat(argv.direccion)
// .then(resp => console.log(resp));

// getClima(45.419998, -75.690002)
// .then(resp => console.log(resp))
// .catch(err => console.log('err', err))

const getInfo = async (direccion) => {
    try {
        const coords = await getLugarLat(direccion);
        const temp = await getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
} 

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

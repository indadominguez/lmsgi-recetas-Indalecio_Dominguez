const fs = require('fs');
const xml2js = require('xml2js');

const xml = fs.readFileSync('recetas.xml', 'utf-8');

xml2js.parseString(xml, (error, result) => {
    if (error) {
        console.error(error);
        return;
    }

    const recetas = result.recetas.receta.map(r => ({
        codigo: r.$.codigo,
        nombre: r.nombre[0],
        categoria: r.categoria[0],
        tiempo: parseInt(r.tiempo[0]),
        dificultad: r.dificultad[0]
    }));

    fs.writeFileSync('recetas.json', JSON.stringify(recetas, null, 2));

    console.log("JSON limpio generado correctamente");
});
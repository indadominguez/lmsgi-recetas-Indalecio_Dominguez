const fs = require('fs');
const xml2js = require('xml2js');

const xml = fs.readFileSync('recetas.xml', 'utf-8');


xml2js.parseString(xml, (error, result) => {
    if (error) {
        console.error(error);
        return;
    }


});
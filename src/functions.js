
const request = require('request');

function api(url, qs = null, fileName = null) {
    return new Promise(
        function (resolve, reject) {
            const options = {
                method: 'GET',
                url: url,
                qs,
                headers: {
                    'x-rapidapi-key': process.env.XRAPIDAPIKEY,
                    'x-rapidapi-host': process.env.XRAPIDAPIHOST,
                    useQueryString: true
                }
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                if (fileName)
                    saveFile(body, fileName);
                resolve(body);
            });
        });
}

function saveFile(txt, fileName) {
    var fs = require('fs');

    fs.writeFile(__dirname + "/" + fileName, txt, function (erro) {

        if (erro) {
            throw erro;
        }

        console.log("Arquivo salvo");
    });
}
module.exports = {
    saveFile, api
}
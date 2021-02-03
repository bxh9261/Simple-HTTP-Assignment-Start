const fs = require('fs');

const gar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getGar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(gar);
  response.end();
};

module.exports.getGar = getGar;


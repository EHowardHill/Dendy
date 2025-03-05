import { readFile } from 'fs';

function main(res) {
    readFile('/mnt/disc/pages/index.html'), (data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    };
}

export default { main };
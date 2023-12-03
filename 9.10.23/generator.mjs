import * as fs from 'fs';
import { Readable } from 'stream'

async function * randomNumber() {
    for (let i = 0; i < 20; i++) {
        yield Math.floor(Math.random() * (2137 - (-420) + 1)) + (-420);
    }
}

const rnlist = Readable.from(randomNumber());

function getTimestamp() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}.${month}.${day}-${hours}:${minutes}:${seconds}`;
}

function writeToFile() {
    const timestamp = getTimestamp();
    const file = `random-${timestamp}.txt`;
    const stream = fs.createWriteStream(file);

    rnlist.on('data', (chunk) => {
        stream.write(chunk.toString()+'\n')
    });

    console.log(`Wygenerowano do pliku: ${file}`);
}

writeToFile();

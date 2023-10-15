import fs from 'fs';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

    for (let i = 0; i < 20; i++) {
        const randomList = randomNumber(-420, 2137);
        stream.write(`${randomList}\n`);
    }

    stream.end();
    console.log(`Wygenerowano do pliku: ${file}`);
}

writeToFile();

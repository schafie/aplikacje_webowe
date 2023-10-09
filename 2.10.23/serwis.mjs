import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'
import http from "http"

const hostname = '127.0.0.1'
const port = 3000


const srv = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;


    if (url === '/') {
        res.statusCode = 200
        const html = await readFile('./serwis.html')
        res.setHeader('content-type', 'text/html')
        res.write(html)
        res.end()
    }

    else if (url === '/kontakt' && method === 'POST') {
        const body = []
        req.on("data", (chunk) => {
            console.log(chunk.toString())
            body.push(chunk)
        })
        req.on("end", async () => {
            const parsedBody = Buffer.concat(body).toString()
            const kontakt = parsedBody.split('=')[1]
            await writeFile(`contact/message-${Date.now().toString()}.txt`, kontakt)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        })
    }

    else if (url === '/api') {
        res.statusCode = 200
        const singers = [
            { autor: 'Taco Homogej', text: 'Piwo Piwo Piwo'},
            { autor: 'Young Leokadia', text: 'Hulanki'},
            { autor: 'Bambi', text: 'Baby Bambi irl'}
        ];
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(singers))
        res.end()
    }

    else if (url === '/dziekujemy') {
        res.statusCode = 200
        const html = await readFile('./serwis_ty.html')
        res.setHeader('content-type', 'text/html')
        res.write(html)
        res.end()
    }

    else {
        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
        res.write("Error 404 cannot find hope")
        res.end()
    }
})

srv.listen(port, hostname, () => {
    console.log(`Serwerek: http://${hostname}:${port}/`)
})
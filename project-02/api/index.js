const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

const data = require('./urls.json')

http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,UPDATE')
    res.setHeader('Access-Control-Max-Age', '256100')

    // res.writeHead(
    //     200,
    //     {"Access-Control-Allow-Origin": "*"}
    // )
    console.log(res.getHeaders())
    console.log(URL.parse(req.url, true))

    const { name, url, del } = URL.parse(req.url, true).query

    function writeFile(cb) {
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cb(JSON.stringify(data))
            }
        )
    }
    console.log("11111111111")

    if (!name || !url) {
        // return res.end('show')
        return res.end(JSON.stringify(data))
    }
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        writeFile(message => res.end(message))
        return data.urls
    }
    data.urls.push({name, url})
    writeFile(message => res.end(message))
    return data.urls

}).listen(3000, () => console.log('Api is running.'))
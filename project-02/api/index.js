const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')


http.createServer((req, res) => {
    const {
        name,
        url,
        del
    } = URL.parse(req.url, true).query
    // http://localhost:3000/urls?name=Google&url=https://www.google.com&del=1
    // console.log(URL.parse(req.url, true).query)
    // console.log(name, url)

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

}).listen(3000, () => console.log("server's runing"))
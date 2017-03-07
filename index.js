// Just things
const http = require('http')

const url = "http://nightly.changelog.com/"

var CHANGELOG_URL = currentURL()

function currentURL() {
    let now = new Date()
    now.setDate(now.getDate() - 1)
    let year = now.getYear() + 1900
    let month = ('0' + (now.getMonth() + 1)).substr(-2)
    let day = ('0' + now.getDate()).substr(-2)
    return url + year + "/" + month + "/" + day
}

// Only update once an hour
setInterval(() => {
    CHANGELOG_URL = currentURL()
    console.log("Set url to ", CHANGELOG_URL)
}, 1000 * 60 * 60);

const server = http.createServer((req, res) => {
    res.writeHead(301, 'Moved Permanently', {
        'Location': CHANGELOG_URL
    })
    res.end()
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(9090);

import { createServer } from "http";
import fetch from "node-fetch";

const PORT = process.env.PORT || 4000

createServer(async (req, res) => {
    res.write("I'm alive");
    res.end();
}).listen(PORT, () => {
    console.log(
        `Image proxy server running. Access it at: http://localhost:${PORT}/`
    );
});

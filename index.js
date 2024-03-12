import { createServer } from "http";
import fetch from "node-fetch";

const PORT = process.env.PORT || 4000

createServer(async (req, res) => {
    try {
        const imageUrl = req.url.slice(1);
        if (imageUrl !== "") {
            const response = await fetch(imageUrl, {
                headers: {
                    referer: "https://www.nettruyenmax.com",
                },
            });
            console.log(`Succesful a request<3`)
            res.writeHead(response.status, response.headers);
            response.body.pipe(res);
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.end(err.toString());
    }
}).listen(PORT, () => {
    console.log(
        `Image proxy server running. Access it at: http://localhost:${PORT}/`
    );
});

import { createServer } from "node:http";
import next from "next";

const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const hostname = process.env.HOST ?? "0.0.0.0";
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

await app.prepare();

const server = createServer((req, res) => {
  const pathname = (req.url ?? "/").split("?")[0];
  if (pathname === "/" || pathname === "/index.html") {
    const writeHead = res.writeHead.bind(res);
    res.writeHead = (statusCode, ...args) => {
      const existing = res.getHeader("Vary");
      const value = Array.isArray(existing)
        ? existing.join(", ")
        : existing?.toString();
      if (!value) {
        res.setHeader("Vary", "Accept");
      } else if (!/(?:^|,\s*)accept(?:\s*,|$)/i.test(value)) {
        res.setHeader("Vary", `${value}, Accept`);
      }
      return writeHead(statusCode, ...args);
    };
  }
  handle(req, res);
});

server.listen(port, hostname, () => {
  console.log(`> Ready on http://${hostname}:${port}`);
});

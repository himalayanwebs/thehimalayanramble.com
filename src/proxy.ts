import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const HOME_LINK = [
  '<https://thehimalayanramble.com/llms.txt>; rel="llms"; type="text/plain"',
  '<https://thehimalayanramble.com/index.md>; rel="alternate"; type="text/markdown"',
].join(", ");

function prefersMarkdown(accept: string) {
  if (accept.includes("text/x-component")) {
    return false;
  }

  const types = accept.split(",").map((part) => {
    const [type, ...params] = part.trim().split(";");
    const q = params.find((param) => param.trim().startsWith("q="));
    const quality = q ? Number(q.split("=")[1]) : 1;
    return { type: type.toLowerCase(), quality };
  });

  const markdown = types.find((type) => type.type === "text/markdown");
  if (!markdown) {
    return false;
  }

  const html = types.find((type) => type.type === "text/html");
  return markdown.quality > 0 && (!html || markdown.quality >= html.quality);
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/index.html") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const accept = request.headers.get("accept") ?? "";

  if (prefersMarkdown(accept)) {
    const url = request.nextUrl.clone();
    url.pathname = "/index.md";
    const response = NextResponse.rewrite(url);
    response.headers.set("Content-Type", "text/markdown; charset=utf-8");
    response.headers.set("Link", HOME_LINK);
    response.headers.set("Vary", "Accept, Accept-Encoding");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/index.html"],
};

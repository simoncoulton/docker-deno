import { serve } from "https://deno.land/std@0.65.0/http/server.ts";
const s = serve({ hostname: "0.0.0.0", port: 8000 });
console.log("Serving Deno 🦕 at http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

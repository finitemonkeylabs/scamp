import { Server, serve } from "https://deno.land/std/http/server.ts";


export class ScampServer {
  private server: Server | null = null;

  async start({port = 3000}: {port: number}) {
    this.server = serve({port},);

    console.log(`🚀Listening on http://localhost:${port}`)
    for await(const req of this.server) {
      req.respond({
        status: 200,
        body: "Hello Scamp! 🐒"
      })
    }
  }
}
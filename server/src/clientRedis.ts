// import { createClient } from "redis";

// const client = createClient();
// client.on("error", (err) => console.log("Redis Client Error", err));
// export default client;

import Redis from "ioredis";

const client = new Redis();

export default client;

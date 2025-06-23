/* eslint-disable @typescript-eslint/no-var-requires */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const cors = require("cors");
import 'dotenv/config'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    credentials: true,
    exposedHeaders: ["X-Total-Count"],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
  };
  app.use(cors(corsOptions));
  
  await app.listen(Number(process.env.MS_PORT));
  console.log(
    `Starting ${process.env.MS_SERVICE} in ${process.env.MS_PORT} [...]`
  );
}
bootstrap();

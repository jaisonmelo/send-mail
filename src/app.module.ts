
import { DomainModule } from "src/domain";
import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    DomainModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

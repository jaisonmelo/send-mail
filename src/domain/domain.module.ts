import { Module } from "@nestjs/common";
import { SendMailModule } from "src/domain/send-mail";

@Module({
  imports: [
    SendMailModule
  ],
  exports: [SendMailModule],
})
export class DomainModule {}

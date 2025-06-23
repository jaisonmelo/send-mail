import { Module } from "@nestjs/common";

import { SendMailService } from "src/domain/send-mail/services";
import { SendMailController } from "src/domain/send-mail/controllers";

@Module({
  controllers: [SendMailController],
  providers: [SendMailService]
})
export class SendMailModule {}

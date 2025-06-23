import { Body, Controller, Post } from "@nestjs/common";

import { ISendMail } from "src/domain/send-mail/interfaces";
import { SendMailService } from "src/domain/send-mail/services";


@Controller('send-mail')
export class SendMailController {
  constructor(private sendMailService: SendMailService) {}
  @Post()
  send(
    @Body() data: ISendMail
  ): Promise<string> {
    return this.sendMailService.execute(data);
  }
}

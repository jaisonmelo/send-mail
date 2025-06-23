import { Controller, Get, Req } from "@nestjs/common";


@Controller()
export class AppController {
  @Get("health")
  getHealth(@Req() req: Request): Record<string, unknown> {
    return { status: true};
  }
}

import { Controller, Get } from "@nestjs/common";

@Controller("")
export class Root {
  @Get()
  hello() {
    return "Hello World";
  }
}

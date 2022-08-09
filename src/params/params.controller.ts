import { Controller, Param,Post,Get } from '@nestjs/common';
import { Request } from 'express';


@Controller('params')
export class ParamsController {
  @Get('/:id')
  addid(@Param("id") id:number){
    return `you entered id is = ${id}`;
  }
}



import { Body, Controller, Get, HttpCode, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('list')
export class ListController {
    @Get('/:id')
    list(@Param() record:any):String{
        console.log(record);
        return `add user ${record.id}`   
    }
    @Post('add')
    add(@Req() req:Request)
    {
        console.log(req.body)
        return req.body
    }
    @Get('listf')
    listFilterUser(@Query() record:any):string
    {
        console.log(record,'===');
        return'filter is'+ record.id
        
    }

}

import { Body, 
        Controller, 
        Get,
        Logger,
        Post,
        Param,
        ParseIntPipe,
        Put,
        Delete,
    } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.interface";

@Controller('todo')
export class TodoController {
    private readonly logger = new Logger(TodoController.name)
    constructor (private readonly todoService:TodoService){}
    @Post()
    create(@Body() todo:Todo): void{
        this.logger.log('Handling create() request')
        return this.todoService.create(todo)
    }
    @Get()
    findAll():Todo[] {
        return this.todoService.findAll()
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Todo {
        this.logger.log('Handling findOne() request with id=' + id +'.......');
        return this.todoService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() todo:Todo): void {
        this.logger.log('Handling update() request with id='+ id +'...')
        return this.todoService.update(id, todo)
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): void{
        this.logger.log('Handling the remove() request with id='+id+'.......')
        return this.todoService.remove(id);
    }
}

import { Pipe, PipeTransform } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
 
  transform(value: any, args?: any) :  any {
    if(!args ){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    return value.filter((note: any)=>{
      return note.title.toLocaleLowerCase().includes(args) |  note.title.toLocaleLowerCase().includes(args);
    })
  }

}

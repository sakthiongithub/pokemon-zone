import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log(value, args)
        if (!args) {
            return value;
        }
        return value.filter((val: any) => {
            let rVal = (val.name.toLocaleLowerCase().includes(args));
            return rVal;
        })

    }

}
import { fileItem } from '../models/itemFile';

export class validator {
    private acceptType = ['image/jpeg', 'image/png'];

    validateType(fileType: string): boolean{
        return fileType == '' || fileType == undefined
        ? false
        : this.acceptType.includes(fileType);
    }

    checkDropped(filename: string, files:fileItem[]): boolean{
        for(let file of files){
            if(file.name == filename){
                return false;
            }
        }
        return false;
    }
}
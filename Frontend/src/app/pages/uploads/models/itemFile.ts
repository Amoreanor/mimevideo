import { Observable } from 'rxjs';

export class fileItem {
    public name: string;
    public uploading = false;
    public uploadPercentage: Observable<number>;
    public downloadURL: Observable<string>;

    constructor(public file:File = file){
        this.name = file.name;
    }
}
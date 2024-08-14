export class TrainingType {
    id?: number;               
    title?: string;             
    IsActive:boolean;                          
    constructor(title: string,IsActive:boolean) {
        this.title = title,
        this.IsActive=IsActive;    
    }                           
}                               
export class TrainingType {
    ID: number;
    Title: string;
    IsActive: boolean;
  
    constructor(ID: number, Title: string, IsActive: boolean) {
      this.ID = ID;
      this.Title = Title;
      this.IsActive = IsActive;
    }
  }
  
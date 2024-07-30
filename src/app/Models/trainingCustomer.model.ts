
export class TrainingCustomer {
    id: number;
    trainingId: number;
    customerId: number;
    attended: boolean;
    isActive: boolean;
  
    constructor(
      id: number,
      trainingId: number,
      customerId: number,
      attended: boolean,
      isActive: boolean
    ) {
      this.id = id;
      this.trainingId = trainingId;
      this.customerId = customerId;
      this.attended = attended;
      this.isActive = isActive;
    }
  }
  
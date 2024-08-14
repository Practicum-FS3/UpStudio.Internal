export class TrainingCustomerType {
    id: number;
    customerTypeID: number;
    trainingTypeID: number;
    trainingCustomerName:string;
    isActive: boolean;
    constructor(
        id: number,
        customerTypeID: number,
        trainingTypeID: number,
        TrainingCustomerName:string,
        isActive: boolean
    ) {
        this.id = id;
        this.customerTypeID = customerTypeID;
        this.trainingTypeID = trainingTypeID;
        this.trainingCustomerName=TrainingCustomerName;
        this.isActive = isActive;
    }
}
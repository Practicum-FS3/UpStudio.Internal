export class TrainingCustomerType {
    id: number;
    customerTypeID: number;
    trainingTypeID: number;
    trainingCustomerTypeName:string;
    isActive: boolean;
    constructor(
        id: number,
        customerTypeID: number,
        trainingTypeID: number,
        trainingCustomerTypeName:string,
        isActive: boolean
    ) {
        this.id = id;
        this.customerTypeID = customerTypeID;
        this.trainingTypeID = trainingTypeID;
        this.trainingCustomerTypeName=trainingCustomerTypeName;
        this.isActive = isActive;
    }
}
import { Time } from "./Time.model";

export class Training {
    id: number;
    trainingCustomerTypeId: number;
    trainerID: number;
    dayOfWeek: number;
    trainerName?:string;
    hour: string;
    minute:string;
    trainingCustomerTypeName?:string;
    participantsCount: number;
    isActive: boolean;
    constructor(
        id: number,
        TrainingCustomerTypeId: number,
        TrainerID: number,
        DayOfWeek: number,
        TrainerName:string,
        Hour: string,
        Minute:string,
        TrainingCustomerTypeName:string,
        ParticipantsCount: number,
        IsActive: boolean
    
    ) {
        this.id = id;
        this.trainingCustomerTypeId =TrainingCustomerTypeId;
        this.trainerID =TrainerID;
        this.dayOfWeek= DayOfWeek;
        this.trainerName=TrainerName;
        this.hour=Hour;
        this.minute=Minute;
        this.trainingCustomerTypeName=TrainingCustomerTypeName;
        this.participantsCount= ParticipantsCount;
        this.isActive= IsActive;
    }
}
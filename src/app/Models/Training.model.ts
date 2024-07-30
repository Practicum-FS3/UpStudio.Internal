import { Time } from "./Time.model";

export class Training {
    id: number;
    trainingTypeID: number;
    trainerID: number;
    dayOfWeek: number;
    hour: Time = { hour: 0, minute: 0 };
    participantsCount: number;
    isActive: boolean;
    constructor(
        id: number,
        trainingTypeID: number,
        trainerID: number,
        dayOfWeek: number,
        hour: Time,
        participantsCount: number,
        isActive: boolean
    ) {
        this.id = id;
        this.trainingTypeID =trainingTypeID;
        this.trainerID =trainerID;
        this.dayOfWeek= dayOfWeek;
        this.hour= hour;
        this.participantsCount= participantsCount;
        this.isActive= isActive;
    }
}
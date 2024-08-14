import { Training } from "./training.model";

export interface TrainingDetails extends Training {
    trainerName?: string;
    trainingDate?: Date;
}
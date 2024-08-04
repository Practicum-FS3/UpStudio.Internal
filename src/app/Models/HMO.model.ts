export class HMO {

    constructor(public id: number = 0,
        public title?: string,
        public isActive?: boolean,
        public arrangementName?: string,
        public trainingsPerMonth?: number,
        public trainingPrice?: number,
        public minimumAge?: number,
        public maximumAge?: number,
        public trainingDescription?: string,
    ) {

    }
}

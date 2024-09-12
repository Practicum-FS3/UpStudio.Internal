import { ContentSection } from "./content-section.module";

export class ContentType {

    constructor(public id: number = 0,
        public title?: string,
        public description?: string,
        public linkHP?: string,
        public link2?: string,
        public title1?: string,
        public title2?: string,
        public title3?: string,
        public isActive?: boolean,
        public contentSections?:ContentSection[]
    ) {

    }
}
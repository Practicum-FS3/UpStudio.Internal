export class ContentSection {

  constructor(public id: number = 0,
      public contentTypeID?: number,
      public section1?: string,
      public section2?: string,
      public section3?: string,
      public image?: File,
      public isActive?: boolean,
      public viewInHP?: boolean,
  ) {

  }
}

export interface ImageData {
  fileName: string;
  contentType: string;
  data: string;
}

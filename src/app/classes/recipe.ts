export class Recipe {
    constructor(
        public title: string,
        public description: string,
        public image?: string,
        public level?: string,
        public preparation_time?:string,
        public baking_time?: string,
        public steps ?: Array<{
            order: number,
            content: string
        }>,
        public ingredients?: Array<{
            name: string;
        }>,
        public reviews ?: [],
        public rating ?: number,
        public isFavorite ?: boolean,
        public created?: string,
        public id?: number,
    ) { }
}

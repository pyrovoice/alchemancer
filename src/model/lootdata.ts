export class LootData{
    name!: string;
    defaultMaxValue!: number;
    lootType!: string;
}

export enum LootType{
    ESSENCE = "ESSENCE",
    OTHER = "OTHER"
}
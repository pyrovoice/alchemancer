import { LootData } from './lootdata';

export class PlayerResource{
    resource!: LootData;
    currentValue: number = 0;
    maxValue: number = 100;
}
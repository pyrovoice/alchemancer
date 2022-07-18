import { Reward } from "./reward";

export class Exploration{
    id: string = "";
    name: string = "";
    displayText: string = "";
    reward!: Reward;
    status: ExplorationStatus = ExplorationStatus.Locked
}

export enum ExplorationStatus{
    Locked, 
    Unlocked,
    Completed
}
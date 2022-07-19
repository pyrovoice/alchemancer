export class ResourceReward{
    resourceName: string = "";
    nbr: number = 0;
}

export class Reward{
    resources: ResourceReward[] = [];
    unlocksResources: ResourceReward[] = [];

}
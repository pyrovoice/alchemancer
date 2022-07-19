import { ResourceReward } from './reward';
import { Resource } from './resource';
import { PlayerResource } from './player-resource';
export class PlayerInventory{
    playerResources: PlayerResource[] = [];

    addResource(r: Resource, nbr: number){
        let foundResource = this.playerResources.find(e => e.resource.name == r.name);
        if(foundResource != undefined){
            foundResource.currentValue += nbr;
            if(foundResource.currentValue > foundResource.maxValue){
                foundResource.currentValue = foundResource.maxValue;
            }
        }
    }


    unlockResources(unlocksResources: ResourceReward[]) {
        unlocksResources.forEach(rr => {
            this.unlockResource(rr.resourceName)
        });
      }

    unlockResource(r: Resource, maxValInitial: number){
        let foundResource = this.playerResources.find(e => e.resource.name == r.name);
        if(foundResource == undefined){
            this.playerResources.push({resource:r, currentValue:0, maxValue:maxValInitial})
        }
    }
}
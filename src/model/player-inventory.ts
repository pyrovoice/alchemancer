import { ResourceReward } from './reward';
import { PlayerResource } from './player-resource';
import { LootData } from './lootdata';
import lootsFile from "src\\assets\\data\\loots.json";

export class PlayerInventory{
    playerResources: PlayerResource[] = [];

    addResource(r: string, nbr: number){
        let foundResource = this.playerResources.find(e => e.resource.name == r);
        if(foundResource != undefined){
            foundResource.currentValue += nbr;
            if(foundResource.currentValue > foundResource.maxValue){
                foundResource.currentValue = foundResource.maxValue;
            }
        }
    }


    unlockResources(unlocksResourcesNames: string[]) {
        unlocksResourcesNames.forEach(rr => {
            this.unlockResource(rr)
        });
      }

    unlockResource(r: string){
        let foundResource = this.playerResources.find(e => e.resource.name == r);
        if(foundResource == undefined){
            let loot = lootsFile.find(e => e.name == r);
            if(loot != undefined){
                this.playerResources.push({resource:loot, currentValue:0, maxValue:loot.defaultMaxValue})
            }
        }
    }
}
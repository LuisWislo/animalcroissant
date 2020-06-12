import { Villager } from './villager';

export interface User {
    username? : string
    villagers? : Villager[]
    island? : {
        name : string
        fruit : string 
    }
}
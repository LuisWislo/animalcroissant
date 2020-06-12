import { Villager } from './villager';

export interface User {
    username? : string
    password? : string
    villagers? : Villager[]
    island? : {
        name? : string
        fruit? : string 
    }
    villager_name? : string
    villager_birthday? : string
}
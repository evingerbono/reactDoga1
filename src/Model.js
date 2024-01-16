import { szenvedoMondatok } from "./angol"
export class Model{
    #cim;
    constructor(){
     this.#cim=szenvedoMondatok[0];
    }

    getCim(){
        return this.#cim;
    }
    aktMondat(index) {
        const aktmondat = szenvedoMondatok[index].mondat.split(" ");
        return aktmondat;
    }

    aktAlap(index){
        const aktalap = szenvedoMondatok[index].alap;
        return aktalap;
    }
    kovetkezoMondat() {
        this.#index++;
        if (this.#index >= szenvedoMondatok.length) {
        }
    }
}
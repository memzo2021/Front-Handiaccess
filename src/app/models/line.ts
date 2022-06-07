export class Line {
    id?: string;
    number: number;
    landingDoor: boolean;
    

    constructor(paramNumber: number, paramLandingDoor: boolean) {
        this.number = paramNumber;
        this.landingDoor = paramLandingDoor;
        

    }
}

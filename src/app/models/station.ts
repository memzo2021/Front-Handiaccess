export class Station {
    id?: string;
    name: string;
    lift: boolean;
    escalator: boolean;
    callTerminal: boolean;
    lineId: number;


    constructor(paramName: string, paramLift: boolean, paramEscalator: boolean, paramCallTerminal: boolean, paramLineId: number) {
        this.name = paramName;
        this.lift = paramLift;
        this.escalator = paramEscalator;
        this.callTerminal = paramCallTerminal;
        this.lineId = paramLineId;

    }
}

export class Station {
    id?: string;
    name: string;
    lift: boolean;
    escalator: boolean;
    callTerminal: boolean;

    constructor(paramName: string, paramLift: boolean, paramEscalator: boolean, paramCallTerminal: boolean) {
        this.name = paramName;
        this.lift = paramLift;
        this.escalator = paramEscalator;
        this.callTerminal = paramCallTerminal;
    }
}

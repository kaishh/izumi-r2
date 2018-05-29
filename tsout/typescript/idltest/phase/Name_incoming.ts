// Auto-generated, any modifications may be overwritten in the future.
import { Name, Struct, StructSerialized } from './Name';

// Name_incoming DTO
export class Name_incoming implements Name  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.phase';
    public static readonly ClassName = 'Name_incoming';
    public static readonly FullClassName = 'idltest.phase.Name_incoming';

    public getPackageName(): string { return Name_incoming.PackageName; }
    public getClassName(): string { return Name_incoming.ClassName; }
    public getFullClassName(): string { return Name_incoming.FullClassName; }

    private _name: string;

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field name is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field name expects type string, got ' + value);
        }

        this._name = value;
    }

    constructor(data: Name_incomingSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.name = data.name;
    }

    public toName(): StructSerialized {
        return {
            'name': this.name
        };
    }

    public serialize(): Name_incomingSerialized {
        return {
            'name': this.name
        };
    }
}

export interface Name_incomingSerialized extends StructSerialized  {
    name: string;
}

Struct.register(Name_incoming.FullClassName, Name_incoming);
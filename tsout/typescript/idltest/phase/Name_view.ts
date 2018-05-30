// Auto-generated, any modifications may be overwritten in the future.
import { Name_stored_Struct, Name_stored_StructSerialized } from './Name_stored_';
import { LengthInBytesStruct, LengthInBytesStructSerialized } from './LengthInBytes';
import { Name, NameStruct, NameStructSerialized } from './Name';

// Name_view DTO
export class Name_view implements Name  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.phase';
    public static readonly ClassName = 'Name_view';
    public static readonly FullClassName = 'idltest.phase.Name_view';

    public getPackageName(): string { return Name_view.PackageName; }
    public getClassName(): string { return Name_view.ClassName; }
    public getFullClassName(): string { return Name_view.FullClassName; }

    private _relatives: Name[];
    private _name: string;
    private _bytes: number;

    public get relatives(): Name[] {
        return this._relatives;
    }

    public set relatives(value: Name[]) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field relatives is not optional');
        }
        this._relatives = value;
    }

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

    public get bytes(): number {
        return this._bytes;
    }

    public set bytes(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field bytes is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field bytes expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field bytes is expected to be an integer, got ' + value);
        }

        this._bytes = value;
    }

    constructor(data: Name_viewSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.relatives = data.relatives.map(e => { return NameStruct.create(e); });
        this.name = data.name;
        this.bytes = data.bytes;
    }

    public toName(): NameStructSerialized {
        return {
            'name': this.name
        };
    }

    public serialize(): Name_viewSerialized {
        return {
            'relatives': this.relatives.map(e => { return {[e.getFullClassName()]: e.serialize()}; }),
            'name': this.name,
            'bytes': this.bytes
        };
    }
}

export interface Name_viewSerialized extends NameStructSerialized  {
    relatives: {[key: string]: NameStructSerialized}[];
    name: string;
    bytes: number;
}

NameStruct.register(Name_view.FullClassName, Name_view);
Name_stored_Struct.register(Name_view.FullClassName, Name_view);
NameStruct.register(Name_view.FullClassName, Name_view);
LengthInBytesStruct.register(Name_view.FullClassName, Name_view);
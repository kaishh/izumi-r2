// Auto-generated, any modifications may be overwritten in the future.
import { Name_stored_, Name_stored_Struct, Name_stored_StructSerialized } from './Name_stored_';
import { NameStruct, NameStructSerialized } from './Name';

// Name_stored DTO
export class Name_stored implements Name_stored_  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.phase';
    public static readonly ClassName = 'Name_stored';
    public static readonly FullClassName = 'idltest.phase.Name_stored';

    public getPackageName(): string { return Name_stored.PackageName; }
    public getClassName(): string { return Name_stored.ClassName; }
    public getFullClassName(): string { return Name_stored.FullClassName; }

    private _name: string;
    private _bytes: number;

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

    constructor(data: Name_storedSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.name = data.name;
        this.bytes = data.bytes;
    }

    public toName_stored_(): Name_stored_StructSerialized {
        return {
            'name': this.name,
            'bytes': this.bytes
        };
    }

    public serialize(): Name_storedSerialized {
        return {
            'name': this.name,
            'bytes': this.bytes
        };
    }
}

export interface Name_storedSerialized extends Name_stored_StructSerialized  {
    name: string;
    bytes: number;
}

Name_stored_Struct.register(Name_stored.FullClassName, Name_stored);
NameStruct.register(Name_stored.FullClassName, Name_stored);
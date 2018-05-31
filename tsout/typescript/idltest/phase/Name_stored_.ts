// Auto-generated, any modifications may be overwritten in the future.
import { LengthInBytesStruct, LengthInBytesStructSerialized } from './LengthInBytes';
import { Name, NameStruct, NameStructSerialized } from './Name';

// Name_stored_ Interface
export interface Name_stored_ extends Name {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): Name_stored_StructSerialized;

    name: string;
    bytes: number;
}

export interface Name_stored_StructSerialized extends NameStructSerialized {
    name: string;
    bytes: number;
}

export class Name_stored_Struct implements Name_stored_ {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.phase.Name_stored_';
    public static readonly ClassName = 'Name_stored_Struct';
    public static readonly FullClassName = 'idltest.phase.Name_stored_.Name_stored_Struct';

    public getPackageName(): string { return Name_stored_Struct.PackageName; }
    public getClassName(): string { return Name_stored_Struct.ClassName; }
    public getFullClassName(): string { return Name_stored_Struct.FullClassName; }

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

    constructor(data: Name_stored_StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.name = data.name;
        this.bytes = data.bytes;
    }

    public serialize(): Name_stored_StructSerialized {
        return {
            'name': this.name,
            'bytes': this.bytes
        };
    }

    // Polymorphic section below. If a new type to be registered, use Name_stored_Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Name_stored_Struct | Name_stored_StructSerialized): Name_stored_}} = {
        [Name_stored_Struct.FullClassName]: Name_stored_Struct
    };

    public static register(className: string, ctor: {new (data?: Name_stored_Struct | Name_stored_StructSerialized): Name_stored_}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: Name_stored_StructSerialized}): Name_stored_ {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Name_stored_Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Name_stored_Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Name_stored_Struct.register(Name_stored_Struct.FullClassName, Name_stored_Struct);
NameStruct.register(Name_stored_Struct.FullClassName, Name_stored_Struct);
LengthInBytesStruct.register(Name_stored_Struct.FullClassName, Name_stored_Struct);
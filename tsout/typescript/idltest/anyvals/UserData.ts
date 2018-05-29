// Auto-generated, any modifications may be overwritten in the future.
import { WithRecordId, Struct, StructSerialized } from './WithRecordId';

// UserData Interface
export interface UserData {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    id: WithRecordId;
}

export interface StructSerialized {
    id: {[key: string]: StructSerialized};
}

export class Struct implements UserData {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals.UserData';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.anyvals.UserData.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _id: WithRecordId;

    public get id(): WithRecordId {
        return this._id;
    }

    public set id(value: WithRecordId) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field id is not optional');
        }
        this._id = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.id = WithRecordIdStruct.create(data.id);
    }

    public serialize(): StructSerialized {
        return {
            'id': {[this.id.getFullClassName()]: this.id.serialize()}
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): UserData}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): UserData}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): UserData {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
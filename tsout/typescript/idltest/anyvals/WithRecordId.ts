// Auto-generated, any modifications may be overwritten in the future.
import { RecordId } from './RecordId';

// WithRecordId Interface
export interface WithRecordId {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    id: RecordId;
}

export interface StructSerialized {
    id: string;
}

export class Struct implements WithRecordId {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals.WithRecordId';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.anyvals.WithRecordId.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _id: RecordId;

    public get id(): RecordId {
        return this._id;
    }

    public set id(value: RecordId) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field id is not optional');
        }
        this._id = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.id = new RecordId(data.id);
    }

    public serialize(): StructSerialized {
        return {
            'id': this.id.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): WithRecordId}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): WithRecordId}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): WithRecordId {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
// Auto-generated, any modifications may be overwritten in the future.
import { RecordId } from './RecordId';

// WithRecordId Interface
export interface WithRecordId {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): WithRecordIdStructSerialized;

    id: RecordId;
}

export interface WithRecordIdStructSerialized {
    id: string;
}

export class WithRecordIdStruct implements WithRecordId {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals.WithRecordId';
    public static readonly ClassName = 'WithRecordIdStruct';
    public static readonly FullClassName = 'idltest.anyvals.WithRecordId.WithRecordIdStruct';

    public getPackageName(): string { return WithRecordIdStruct.PackageName; }
    public getClassName(): string { return WithRecordIdStruct.ClassName; }
    public getFullClassName(): string { return WithRecordIdStruct.FullClassName; }

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

    constructor(data: WithRecordIdStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.id = new RecordId(data.id);
    }

    public serialize(): WithRecordIdStructSerialized {
        return {
            'id': this.id.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use WithRecordIdStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: WithRecordIdStruct | WithRecordIdStructSerialized): WithRecordId}} = {
        [WithRecordIdStruct.FullClassName]: WithRecordIdStruct
    };

    public static register(className: string, ctor: {new (data?: WithRecordIdStruct | WithRecordIdStructSerialized): WithRecordId}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: WithRecordIdStructSerialized}): WithRecordId {
        const polymorphicId = Object.keys(data)[0];
        const ctor = WithRecordIdStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for WithRecordIdStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

WithRecordIdStruct.register(WithRecordIdStruct.FullClassName, WithRecordIdStruct);
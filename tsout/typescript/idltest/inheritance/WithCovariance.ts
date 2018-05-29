// Auto-generated, any modifications may be overwritten in the future.
import { Covariant, Struct, StructSerialized } from './Covariant';

// WithCovariance Interface
export interface WithCovariance {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    field: Covariant;
}

export interface StructSerialized {
    field: {[key: string]: StructSerialized};
}

export class Struct implements WithCovariance {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance.WithCovariance';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.inheritance.WithCovariance.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _field: Covariant;

    public get field(): Covariant {
        return this._field;
    }

    public set field(value: Covariant) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field field is not optional');
        }
        this._field = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.field = CovariantStruct.create(data.field);
    }

    public serialize(): StructSerialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): WithCovariance}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): WithCovariance}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): WithCovariance {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
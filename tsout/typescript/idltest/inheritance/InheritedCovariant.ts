// Auto-generated, any modifications may be overwritten in the future.
import { CovariantA, Struct, StructSerialized } from './CovariantA';
import { WithCovariance, Struct, StructSerialized } from './WithCovariance';

// InheritedCovariant Interface
export interface InheritedCovariant extends WithCovariance {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    field: CovariantA;
}

export interface StructSerialized extends StructSerialized {
    field: {[key: string]: StructSerialized};
}

export class Struct implements InheritedCovariant {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance.InheritedCovariant';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.inheritance.InheritedCovariant.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _field: CovariantA;

    public get field(): CovariantA {
        return this._field;
    }

    public set field(value: CovariantA) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field field is not optional');
        }
        this._field = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.field = CovariantAStruct.create(data.field);
    }

    public serialize(): StructSerialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): InheritedCovariant}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): InheritedCovariant}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): InheritedCovariant {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
Struct.register(Struct.FullClassName, Struct);
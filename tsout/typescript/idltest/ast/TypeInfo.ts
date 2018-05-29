// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';

// TypeInfo Interface
export interface TypeInfo {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    type: Type;
}

export interface StructSerialized {
    type: TypeSerialized;
}

export class Struct implements TypeInfo {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TypeInfo';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.ast.TypeInfo.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _type: Type;

    public get type(): Type {
        return this._type;
    }

    public set type(value: Type) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field type is not optional');
        }
        this._type = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.type = new Type(data.type);
    }

    public serialize(): StructSerialized {
        return {
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): TypeInfo}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): TypeInfo}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): TypeInfo {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
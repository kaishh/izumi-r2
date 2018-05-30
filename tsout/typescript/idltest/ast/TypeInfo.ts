// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';

// TypeInfo Interface
export interface TypeInfo {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TypeInfoStructSerialized;

    type: Type;
}

export interface TypeInfoStructSerialized {
    type: TypeSerialized;
}

export class TypeInfoStruct implements TypeInfo {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TypeInfo';
    public static readonly ClassName = 'TypeInfoStruct';
    public static readonly FullClassName = 'idltest.ast.TypeInfo.TypeInfoStruct';

    public getPackageName(): string { return TypeInfoStruct.PackageName; }
    public getClassName(): string { return TypeInfoStruct.ClassName; }
    public getFullClassName(): string { return TypeInfoStruct.FullClassName; }

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

    constructor(data: TypeInfoStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.type = new Type(data.type);
    }

    public serialize(): TypeInfoStructSerialized {
        return {
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use TypeInfoStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TypeInfoStruct | TypeInfoStructSerialized): TypeInfo}} = {
        [TypeInfoStruct.FullClassName]: TypeInfoStruct
    };

    public static register(className: string, ctor: {new (data?: TypeInfoStruct | TypeInfoStructSerialized): TypeInfo}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TypeInfoStructSerialized}): TypeInfo {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TypeInfoStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TypeInfoStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TypeInfoStruct.register(TypeInfoStruct.FullClassName, TypeInfoStruct);
// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { TypeInfoStruct, TypeInfoStructSerialized } from './TypeInfo';
import { FloatNode, FloatNodeStruct, FloatNodeStructSerialized } from './FloatNode';

// TFloatNode Interface
export interface TFloatNode extends FloatNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TFloatNodeStructSerialized;

    lit: number;
    type: Type;
}

export interface TFloatNodeStructSerialized extends FloatNodeStructSerialized {
    lit: number;
    type: TypeSerialized;
}

export class TFloatNodeStruct implements TFloatNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TFloatNode';
    public static readonly ClassName = 'TFloatNodeStruct';
    public static readonly FullClassName = 'idltest.ast.TFloatNode.TFloatNodeStruct';

    public getPackageName(): string { return TFloatNodeStruct.PackageName; }
    public getClassName(): string { return TFloatNodeStruct.ClassName; }
    public getFullClassName(): string { return TFloatNodeStruct.FullClassName; }

    private _lit: number;
    private _type: Type;

    public get lit(): number {
        // Precision: 32
        return this._lit;
    }

    public set lit(value: number) {
        // Precision: 32
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field lit is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field lit expects type number, got ' + value);
        }

        this._lit = value;
    }

    public get type(): Type {
        return this._type;
    }

    public set type(value: Type) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field type is not optional');
        }
        this._type = value;
    }

    constructor(data: TFloatNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
        this.type = new Type(data.type);
    }

    public serialize(): TFloatNodeStructSerialized {
        return {
            'lit': this.lit,
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use TFloatNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TFloatNodeStruct | TFloatNodeStructSerialized): TFloatNode}} = {
        [TFloatNodeStruct.FullClassName]: TFloatNodeStruct
    };

    public static register(className: string, ctor: {new (data?: TFloatNodeStruct | TFloatNodeStructSerialized): TFloatNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TFloatNodeStructSerialized}): TFloatNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TFloatNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TFloatNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TFloatNodeStruct.register(TFloatNodeStruct.FullClassName, TFloatNodeStruct);
FloatNodeStruct.register(TFloatNodeStruct.FullClassName, TFloatNodeStruct);
TypeInfoStruct.register(TFloatNodeStruct.FullClassName, TFloatNodeStruct);
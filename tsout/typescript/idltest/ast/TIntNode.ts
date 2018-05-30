// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { TypeInfoStruct, TypeInfoStructSerialized } from './TypeInfo';
import { IntNode, IntNodeStruct, IntNodeStructSerialized } from './IntNode';

// TIntNode Interface
export interface TIntNode extends IntNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TIntNodeStructSerialized;

    lit: number;
    type: Type;
}

export interface TIntNodeStructSerialized extends IntNodeStructSerialized {
    lit: number;
    type: TypeSerialized;
}

export class TIntNodeStruct implements TIntNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TIntNode';
    public static readonly ClassName = 'TIntNodeStruct';
    public static readonly FullClassName = 'idltest.ast.TIntNode.TIntNodeStruct';

    public getPackageName(): string { return TIntNodeStruct.PackageName; }
    public getClassName(): string { return TIntNodeStruct.ClassName; }
    public getFullClassName(): string { return TIntNodeStruct.FullClassName; }

    private _lit: number;
    private _type: Type;

    public get lit(): number {
        return this._lit;
    }

    public set lit(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field lit is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field lit expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field lit is expected to be an integer, got ' + value);
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

    constructor(data: TIntNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
        this.type = new Type(data.type);
    }

    public serialize(): TIntNodeStructSerialized {
        return {
            'lit': this.lit,
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use TIntNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TIntNodeStruct | TIntNodeStructSerialized): TIntNode}} = {
        [TIntNodeStruct.FullClassName]: TIntNodeStruct
    };

    public static register(className: string, ctor: {new (data?: TIntNodeStruct | TIntNodeStructSerialized): TIntNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TIntNodeStructSerialized}): TIntNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TIntNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TIntNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TIntNodeStruct.register(TIntNodeStruct.FullClassName, TIntNodeStruct);
IntNodeStruct.register(TIntNodeStruct.FullClassName, TIntNodeStruct);
TypeInfoStruct.register(TIntNodeStruct.FullClassName, TIntNodeStruct);
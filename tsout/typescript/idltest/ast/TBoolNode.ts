// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { TypeInfoStruct, TypeInfoStructSerialized } from './TypeInfo';
import { BoolNode, BoolNodeStruct, BoolNodeStructSerialized } from './BoolNode';

// TBoolNode Interface
export interface TBoolNode extends BoolNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TBoolNodeStructSerialized;

    lit: boolean;
    type: Type;
}

export interface TBoolNodeStructSerialized extends BoolNodeStructSerialized {
    lit: boolean;
    type: TypeSerialized;
}

export class TBoolNodeStruct implements TBoolNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TBoolNode';
    public static readonly ClassName = 'TBoolNodeStruct';
    public static readonly FullClassName = 'idltest.ast.TBoolNode.TBoolNodeStruct';

    public getPackageName(): string { return TBoolNodeStruct.PackageName; }
    public getClassName(): string { return TBoolNodeStruct.ClassName; }
    public getFullClassName(): string { return TBoolNodeStruct.FullClassName; }

    private _lit: boolean;
    private _type: Type;

    public get lit(): boolean {
        return this._lit;
    }

    public set lit(value: boolean) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field lit is not optional');
        }

        if (typeof value !== 'boolean') {
            throw new Error('Field lit expects boolean type, got ' + value);
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

    constructor(data: TBoolNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
        this.type = new Type(data.type);
    }

    public serialize(): TBoolNodeStructSerialized {
        return {
            'lit': this.lit,
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use TBoolNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TBoolNodeStruct | TBoolNodeStructSerialized): TBoolNode}} = {
        [TBoolNodeStruct.FullClassName]: TBoolNodeStruct
    };

    public static register(className: string, ctor: {new (data?: TBoolNodeStruct | TBoolNodeStructSerialized): TBoolNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TBoolNodeStructSerialized}): TBoolNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TBoolNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TBoolNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TBoolNodeStruct.register(TBoolNodeStruct.FullClassName, TBoolNodeStruct);
BoolNodeStruct.register(TBoolNodeStruct.FullClassName, TBoolNodeStruct);
TypeInfoStruct.register(TBoolNodeStruct.FullClassName, TBoolNodeStruct);
// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { TypeInfoStruct, TypeInfoStructSerialized } from './TypeInfo';
import { SymNode, SymNodeStruct, SymNodeStructSerialized } from './SymNode';

// TSymNode Interface
export interface TSymNode extends SymNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TSymNodeStructSerialized;

    lit: string;
    type: Type;
}

export interface TSymNodeStructSerialized extends SymNodeStructSerialized {
    lit: string;
    type: TypeSerialized;
}

export class TSymNodeStruct implements TSymNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TSymNode';
    public static readonly ClassName = 'TSymNodeStruct';
    public static readonly FullClassName = 'idltest.ast.TSymNode.TSymNodeStruct';

    public getPackageName(): string { return TSymNodeStruct.PackageName; }
    public getClassName(): string { return TSymNodeStruct.ClassName; }
    public getFullClassName(): string { return TSymNodeStruct.FullClassName; }

    private _lit: string;
    private _type: Type;

    public get lit(): string {
        return this._lit;
    }

    public set lit(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field lit is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field lit expects type string, got ' + value);
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

    constructor(data: TSymNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
        this.type = new Type(data.type);
    }

    public serialize(): TSymNodeStructSerialized {
        return {
            'lit': this.lit,
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use TSymNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TSymNodeStruct | TSymNodeStructSerialized): TSymNode}} = {
        [TSymNodeStruct.FullClassName]: TSymNodeStruct
    };

    public static register(className: string, ctor: {new (data?: TSymNodeStruct | TSymNodeStructSerialized): TSymNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TSymNodeStructSerialized}): TSymNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TSymNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TSymNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TSymNodeStruct.register(TSymNodeStruct.FullClassName, TSymNodeStruct);
SymNodeStruct.register(TSymNodeStruct.FullClassName, TSymNodeStruct);
TypeInfoStruct.register(TSymNodeStruct.FullClassName, TSymNodeStruct);
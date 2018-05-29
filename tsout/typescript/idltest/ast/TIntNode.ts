// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { Struct, StructSerialized } from './TypeInfo';
import { IntNode, Struct, StructSerialized } from './IntNode';

// TIntNode Interface
export interface TIntNode extends IntNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    lit: number;
    type: Type;
}

export interface StructSerialized extends StructSerialized {
    lit: number;
    type: TypeSerialized;
}

export class Struct implements TIntNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TIntNode';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.ast.TIntNode.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

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

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
        this.type = new Type(data.type);
    }

    public serialize(): StructSerialized {
        return {
            'lit': this.lit,
            'type': this.type.serialize()
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): TIntNode}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): TIntNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): TIntNode {
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
Struct.register(Struct.FullClassName, Struct);
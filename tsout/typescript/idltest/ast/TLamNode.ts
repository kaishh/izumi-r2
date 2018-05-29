// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { Struct, StructSerialized } from './TypeInfo';
import { LamNode, Struct, StructSerialized } from './LamNode';
import { AST, ASTHelpers } from './AST';

// TLamNode Interface
export interface TLamNode extends LamNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    type: Type;
    body: AST;
    paramNames: string[];
}

export interface StructSerialized extends StructSerialized {
    type: TypeSerialized;
    body: {[key: string]: any};
    paramNames: string[];
}

export class Struct implements TLamNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TLamNode';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.ast.TLamNode.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _type: Type;
    private _body: AST;
    private _paramNames: string[];

    public get type(): Type {
        return this._type;
    }

    public set type(value: Type) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field type is not optional');
        }
        this._type = value;
    }

    public get body(): AST {
        return this._body;
    }

    public set body(value: AST) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field body is not optional');
        }
        this._body = value;
    }

    public get paramNames(): string[] {
        return this._paramNames;
    }

    public set paramNames(value: string[]) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field paramNames is not optional');
        }
        this._paramNames = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.type = new Type(data.type);
        this.body = ASTHelpers.deserialize(data.body);
        this.paramNames = data.paramNames.slice();
    }

    public serialize(): StructSerialized {
        return {
            'type': this.type.serialize(),
            'body': ASTHelpers.serialize(this.body),
            'paramNames': this.paramNames.slice()
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): TLamNode}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): TLamNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): TLamNode {
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
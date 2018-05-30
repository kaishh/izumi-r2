// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { TypeInfoStruct, TypeInfoStructSerialized } from './TypeInfo';
import { LamNode, LamNodeStruct, LamNodeStructSerialized } from './LamNode';
import { AST, ASTHelpers } from './AST';

// TLamNode Interface
export interface TLamNode extends LamNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TLamNodeStructSerialized;

    type: Type;
    body: AST;
    paramNames: string[];
}

export interface TLamNodeStructSerialized extends LamNodeStructSerialized {
    type: TypeSerialized;
    body: {[key: string]: any};
    paramNames: string[];
}

export class TLamNodeStruct implements TLamNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TLamNode';
    public static readonly ClassName = 'TLamNodeStruct';
    public static readonly FullClassName = 'idltest.ast.TLamNode.TLamNodeStruct';

    public getPackageName(): string { return TLamNodeStruct.PackageName; }
    public getClassName(): string { return TLamNodeStruct.ClassName; }
    public getFullClassName(): string { return TLamNodeStruct.FullClassName; }

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

    constructor(data: TLamNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.type = new Type(data.type);
        this.body = ASTHelpers.deserialize(data.body);
        this.paramNames = data.paramNames.slice();
    }

    public serialize(): TLamNodeStructSerialized {
        return {
            'type': this.type.serialize(),
            'body': ASTHelpers.serialize(this.body),
            'paramNames': this.paramNames.slice()
        };
    }

    // Polymorphic section below. If a new type to be registered, use TLamNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TLamNodeStruct | TLamNodeStructSerialized): TLamNode}} = {
        [TLamNodeStruct.FullClassName]: TLamNodeStruct
    };

    public static register(className: string, ctor: {new (data?: TLamNodeStruct | TLamNodeStructSerialized): TLamNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TLamNodeStructSerialized}): TLamNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TLamNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TLamNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TLamNodeStruct.register(TLamNodeStruct.FullClassName, TLamNodeStruct);
LamNodeStruct.register(TLamNodeStruct.FullClassName, TLamNodeStruct);
TypeInfoStruct.register(TLamNodeStruct.FullClassName, TLamNodeStruct);
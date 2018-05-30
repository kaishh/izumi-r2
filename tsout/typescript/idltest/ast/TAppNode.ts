// Auto-generated, any modifications may be overwritten in the future.
import { Type, TypeSerialized } from './Type';
import { TypeInfoStruct, TypeInfoStructSerialized } from './TypeInfo';
import { AppNode, AppNodeStruct, AppNodeStructSerialized } from './AppNode';
import { AST, ASTHelpers } from './AST';

// TAppNode Interface
export interface TAppNode extends AppNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TAppNodeStructSerialized;

    type: Type;
    fun: AST;
    args: AST[];
}

export interface TAppNodeStructSerialized extends AppNodeStructSerialized {
    type: TypeSerialized;
    fun: {[key: string]: any};
    args: {[key: string]: any}[];
}

export class TAppNodeStruct implements TAppNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.TAppNode';
    public static readonly ClassName = 'TAppNodeStruct';
    public static readonly FullClassName = 'idltest.ast.TAppNode.TAppNodeStruct';

    public getPackageName(): string { return TAppNodeStruct.PackageName; }
    public getClassName(): string { return TAppNodeStruct.ClassName; }
    public getFullClassName(): string { return TAppNodeStruct.FullClassName; }

    private _type: Type;
    private _fun: AST;
    private _args: AST[];

    public get type(): Type {
        return this._type;
    }

    public set type(value: Type) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field type is not optional');
        }
        this._type = value;
    }

    public get fun(): AST {
        return this._fun;
    }

    public set fun(value: AST) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field fun is not optional');
        }
        this._fun = value;
    }

    public get args(): AST[] {
        return this._args;
    }

    public set args(value: AST[]) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field args is not optional');
        }
        this._args = value;
    }

    constructor(data: TAppNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.type = new Type(data.type);
        this.fun = ASTHelpers.deserialize(data.fun);
        this.args = data.args.map(e => { return ASTHelpers.deserialize(e); });
    }

    public serialize(): TAppNodeStructSerialized {
        return {
            'type': this.type.serialize(),
            'fun': ASTHelpers.serialize(this.fun),
            'args': this.args.map(e => { return ASTHelpers.serialize(e); })
        };
    }

    // Polymorphic section below. If a new type to be registered, use TAppNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TAppNodeStruct | TAppNodeStructSerialized): TAppNode}} = {
        [TAppNodeStruct.FullClassName]: TAppNodeStruct
    };

    public static register(className: string, ctor: {new (data?: TAppNodeStruct | TAppNodeStructSerialized): TAppNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TAppNodeStructSerialized}): TAppNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TAppNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TAppNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TAppNodeStruct.register(TAppNodeStruct.FullClassName, TAppNodeStruct);
AppNodeStruct.register(TAppNodeStruct.FullClassName, TAppNodeStruct);
TypeInfoStruct.register(TAppNodeStruct.FullClassName, TAppNodeStruct);
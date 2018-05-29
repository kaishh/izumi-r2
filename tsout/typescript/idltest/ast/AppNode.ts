// Auto-generated, any modifications may be overwritten in the future.
import { AST, ASTHelpers } from './AST';

// AppNode Interface
export interface AppNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    fun: AST;
    args: AST[];
}

export interface StructSerialized {
    fun: {[key: string]: any};
    args: {[key: string]: any}[];
}

export class Struct implements AppNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.AppNode';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.ast.AppNode.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _fun: AST;
    private _args: AST[];

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

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.fun = ASTHelpers.deserialize(data.fun);
        this.args = data.args.map(e => { return ASTHelpers.deserialize(e); });
    }

    public serialize(): StructSerialized {
        return {
            'fun': ASTHelpers.serialize(this.fun),
            'args': this.args.map(e => { return ASTHelpers.serialize(e); })
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): AppNode}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): AppNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): AppNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
// Auto-generated, any modifications may be overwritten in the future.
import { AST, ASTHelpers } from './AST';

// AppNode Interface
export interface AppNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): AppNodeStructSerialized;

    fun: AST;
    args: AST[];
}

export interface AppNodeStructSerialized {
    fun: {[key: string]: any};
    args: {[key: string]: any}[];
}

export class AppNodeStruct implements AppNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.AppNode';
    public static readonly ClassName = 'AppNodeStruct';
    public static readonly FullClassName = 'idltest.ast.AppNode.AppNodeStruct';

    public getPackageName(): string { return AppNodeStruct.PackageName; }
    public getClassName(): string { return AppNodeStruct.ClassName; }
    public getFullClassName(): string { return AppNodeStruct.FullClassName; }

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

    constructor(data: AppNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.fun = ASTHelpers.deserialize(data.fun);
        this.args = data.args.map(e => { return ASTHelpers.deserialize(e); });
    }

    public serialize(): AppNodeStructSerialized {
        return {
            'fun': ASTHelpers.serialize(this.fun),
            'args': this.args.map(e => { return ASTHelpers.serialize(e); })
        };
    }

    // Polymorphic section below. If a new type to be registered, use AppNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: AppNodeStruct | AppNodeStructSerialized): AppNode}} = {
        [AppNodeStruct.FullClassName]: AppNodeStruct
    };

    public static register(className: string, ctor: {new (data?: AppNodeStruct | AppNodeStructSerialized): AppNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: AppNodeStructSerialized}): AppNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = AppNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for AppNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

AppNodeStruct.register(AppNodeStruct.FullClassName, AppNodeStruct);
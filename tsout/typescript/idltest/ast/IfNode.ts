// Auto-generated, any modifications may be overwritten in the future.
import { AST, ASTHelpers } from './AST';

// IfNode Interface
export interface IfNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): IfNodeStructSerialized;

    cond: AST;
    thenNode: AST;
    elseNode: AST;
}

export interface IfNodeStructSerialized {
    cond: {[key: string]: any};
    thenNode: {[key: string]: any};
    elseNode: {[key: string]: any};
}

export class IfNodeStruct implements IfNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.IfNode';
    public static readonly ClassName = 'IfNodeStruct';
    public static readonly FullClassName = 'idltest.ast.IfNode.IfNodeStruct';

    public getPackageName(): string { return IfNodeStruct.PackageName; }
    public getClassName(): string { return IfNodeStruct.ClassName; }
    public getFullClassName(): string { return IfNodeStruct.FullClassName; }

    private _cond: AST;
    private _thenNode: AST;
    private _elseNode: AST;

    public get cond(): AST {
        return this._cond;
    }

    public set cond(value: AST) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field cond is not optional');
        }
        this._cond = value;
    }

    public get thenNode(): AST {
        return this._thenNode;
    }

    public set thenNode(value: AST) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field thenNode is not optional');
        }
        this._thenNode = value;
    }

    public get elseNode(): AST {
        return this._elseNode;
    }

    public set elseNode(value: AST) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field elseNode is not optional');
        }
        this._elseNode = value;
    }

    constructor(data: IfNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.cond = ASTHelpers.deserialize(data.cond);
        this.thenNode = ASTHelpers.deserialize(data.thenNode);
        this.elseNode = ASTHelpers.deserialize(data.elseNode);
    }

    public serialize(): IfNodeStructSerialized {
        return {
            'cond': ASTHelpers.serialize(this.cond),
            'thenNode': ASTHelpers.serialize(this.thenNode),
            'elseNode': ASTHelpers.serialize(this.elseNode)
        };
    }

    // Polymorphic section below. If a new type to be registered, use IfNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: IfNodeStruct | IfNodeStructSerialized): IfNode}} = {
        [IfNodeStruct.FullClassName]: IfNodeStruct
    };

    public static register(className: string, ctor: {new (data?: IfNodeStruct | IfNodeStructSerialized): IfNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: IfNodeStructSerialized}): IfNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = IfNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for IfNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

IfNodeStruct.register(IfNodeStruct.FullClassName, IfNodeStruct);
// Auto-generated, any modifications may be overwritten in the future.
import { AST, ASTHelpers } from './AST';

// IfNode Interface
export interface IfNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    cond: AST;
    thenNode: AST;
    elseNode: AST;
}

export interface StructSerialized {
    cond: {[key: string]: any};
    thenNode: {[key: string]: any};
    elseNode: {[key: string]: any};
}

export class Struct implements IfNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.IfNode';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.ast.IfNode.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

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

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.cond = ASTHelpers.deserialize(data.cond);
        this.thenNode = ASTHelpers.deserialize(data.thenNode);
        this.elseNode = ASTHelpers.deserialize(data.elseNode);
    }

    public serialize(): StructSerialized {
        return {
            'cond': ASTHelpers.serialize(this.cond),
            'thenNode': ASTHelpers.serialize(this.thenNode),
            'elseNode': ASTHelpers.serialize(this.elseNode)
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): IfNode}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): IfNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): IfNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
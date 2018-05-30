// Auto-generated, any modifications may be overwritten in the future.

// SymNode Interface
export interface SymNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): SymNodeStructSerialized;

    lit: string;
}

export interface SymNodeStructSerialized {
    lit: string;
}

export class SymNodeStruct implements SymNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.SymNode';
    public static readonly ClassName = 'SymNodeStruct';
    public static readonly FullClassName = 'idltest.ast.SymNode.SymNodeStruct';

    public getPackageName(): string { return SymNodeStruct.PackageName; }
    public getClassName(): string { return SymNodeStruct.ClassName; }
    public getFullClassName(): string { return SymNodeStruct.FullClassName; }

    private _lit: string;

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

    constructor(data: SymNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
    }

    public serialize(): SymNodeStructSerialized {
        return {
            'lit': this.lit
        };
    }

    // Polymorphic section below. If a new type to be registered, use SymNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: SymNodeStruct | SymNodeStructSerialized): SymNode}} = {
        [SymNodeStruct.FullClassName]: SymNodeStruct
    };

    public static register(className: string, ctor: {new (data?: SymNodeStruct | SymNodeStructSerialized): SymNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: SymNodeStructSerialized}): SymNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = SymNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for SymNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

SymNodeStruct.register(SymNodeStruct.FullClassName, SymNodeStruct);
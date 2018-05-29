// Auto-generated, any modifications may be overwritten in the future.

// IntNode Interface
export interface IntNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    lit: number;
}

export interface StructSerialized {
    lit: number;
}

export class Struct implements IntNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.IntNode';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.ast.IntNode.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _lit: number;

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

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
    }

    public serialize(): StructSerialized {
        return {
            'lit': this.lit
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): IntNode}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): IntNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): IntNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
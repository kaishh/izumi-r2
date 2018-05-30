// Auto-generated, any modifications may be overwritten in the future.

// BoolNode Interface
export interface BoolNode {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): BoolNodeStructSerialized;

    lit: boolean;
}

export interface BoolNodeStructSerialized {
    lit: boolean;
}

export class BoolNodeStruct implements BoolNode {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.ast.BoolNode';
    public static readonly ClassName = 'BoolNodeStruct';
    public static readonly FullClassName = 'idltest.ast.BoolNode.BoolNodeStruct';

    public getPackageName(): string { return BoolNodeStruct.PackageName; }
    public getClassName(): string { return BoolNodeStruct.ClassName; }
    public getFullClassName(): string { return BoolNodeStruct.FullClassName; }

    private _lit: boolean;

    public get lit(): boolean {
        return this._lit;
    }

    public set lit(value: boolean) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field lit is not optional');
        }

        if (typeof value !== 'boolean') {
            throw new Error('Field lit expects boolean type, got ' + value);
        }

        this._lit = value;
    }

    constructor(data: BoolNodeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.lit = data.lit;
    }

    public serialize(): BoolNodeStructSerialized {
        return {
            'lit': this.lit
        };
    }

    // Polymorphic section below. If a new type to be registered, use BoolNodeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: BoolNodeStruct | BoolNodeStructSerialized): BoolNode}} = {
        [BoolNodeStruct.FullClassName]: BoolNodeStruct
    };

    public static register(className: string, ctor: {new (data?: BoolNodeStruct | BoolNodeStructSerialized): BoolNode}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: BoolNodeStructSerialized}): BoolNode {
        const polymorphicId = Object.keys(data)[0];
        const ctor = BoolNodeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for BoolNodeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

BoolNodeStruct.register(BoolNodeStruct.FullClassName, BoolNodeStruct);
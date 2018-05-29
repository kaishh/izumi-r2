// Auto-generated, any modifications may be overwritten in the future.

// IntPair Interface
export interface IntPair {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    y: number;
    x: number;
}

export interface StructSerialized {
    y: number;
    x: number;
}

export class Struct implements IntPair {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.dtofields.IntPair';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.dtofields.IntPair.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _y: number;
    private _x: number;

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field y is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field y expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field y is expected to be an integer, got ' + value);
        }

        this._y = value;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field x is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field x expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field x is expected to be an integer, got ' + value);
        }

        this._x = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.y = data.y;
        this.x = data.x;
    }

    public serialize(): StructSerialized {
        return {
            'y': this.y,
            'x': this.x
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): IntPair}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): IntPair}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): IntPair {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
// Auto-generated, any modifications may be overwritten in the future.

// LengthInBytes Interface
export interface LengthInBytes {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    bytes: number;
}

export interface StructSerialized {
    bytes: number;
}

export class Struct implements LengthInBytes {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.phase.LengthInBytes';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.phase.LengthInBytes.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _bytes: number;

    public get bytes(): number {
        return this._bytes;
    }

    public set bytes(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field bytes is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field bytes expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field bytes is expected to be an integer, got ' + value);
        }

        this._bytes = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.bytes = data.bytes;
    }

    public serialize(): StructSerialized {
        return {
            'bytes': this.bytes
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): LengthInBytes}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): LengthInBytes}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): LengthInBytes {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
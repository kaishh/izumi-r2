// Auto-generated, any modifications may be overwritten in the future.

// LengthInBytes Interface
export interface LengthInBytes {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): LengthInBytesStructSerialized;

    bytes: number;
}

export interface LengthInBytesStructSerialized {
    bytes: number;
}

export class LengthInBytesStruct implements LengthInBytes {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.phase.LengthInBytes';
    public static readonly ClassName = 'LengthInBytesStruct';
    public static readonly FullClassName = 'idltest.phase.LengthInBytes.LengthInBytesStruct';

    public getPackageName(): string { return LengthInBytesStruct.PackageName; }
    public getClassName(): string { return LengthInBytesStruct.ClassName; }
    public getFullClassName(): string { return LengthInBytesStruct.FullClassName; }

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

    constructor(data: LengthInBytesStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.bytes = data.bytes;
    }

    public serialize(): LengthInBytesStructSerialized {
        return {
            'bytes': this.bytes
        };
    }

    // Polymorphic section below. If a new type to be registered, use LengthInBytesStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: LengthInBytesStruct | LengthInBytesStructSerialized): LengthInBytes}} = {
        [LengthInBytesStruct.FullClassName]: LengthInBytesStruct
    };

    public static register(className: string, ctor: {new (data?: LengthInBytesStruct | LengthInBytesStructSerialized): LengthInBytes}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: LengthInBytesStructSerialized}): LengthInBytes {
        const polymorphicId = Object.keys(data)[0];
        const ctor = LengthInBytesStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for LengthInBytesStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

LengthInBytesStruct.register(LengthInBytesStruct.FullClassName, LengthInBytesStruct);
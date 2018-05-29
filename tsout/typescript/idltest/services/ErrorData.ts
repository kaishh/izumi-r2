// Auto-generated, any modifications may be overwritten in the future.

// ErrorData Interface
export interface ErrorData {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    message: string;
}

export interface StructSerialized {
    message: string;
}

export class Struct implements ErrorData {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services.ErrorData';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.services.ErrorData.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _message: string;

    public get message(): string {
        return this._message;
    }

    public set message(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field message is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field message expects type string, got ' + value);
        }

        this._message = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.message = data.message;
    }

    public serialize(): StructSerialized {
        return {
            'message': this.message
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): ErrorData}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): ErrorData}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): ErrorData {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
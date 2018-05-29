// Auto-generated, any modifications may be overwritten in the future.

// SuccessData Interface
export interface SuccessData {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    greeting: string;
}

export interface StructSerialized {
    greeting: string;
}

export class Struct implements SuccessData {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services.SuccessData';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.services.SuccessData.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _greeting: string;

    public get greeting(): string {
        return this._greeting;
    }

    public set greeting(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field greeting is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field greeting expects type string, got ' + value);
        }

        this._greeting = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.greeting = data.greeting;
    }

    public serialize(): StructSerialized {
        return {
            'greeting': this.greeting
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): SuccessData}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): SuccessData}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): SuccessData {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
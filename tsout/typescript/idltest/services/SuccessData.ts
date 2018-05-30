// Auto-generated, any modifications may be overwritten in the future.

// SuccessData Interface
export interface SuccessData {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): SuccessDataStructSerialized;

    greeting: string;
}

export interface SuccessDataStructSerialized {
    greeting: string;
}

export class SuccessDataStruct implements SuccessData {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services.SuccessData';
    public static readonly ClassName = 'SuccessDataStruct';
    public static readonly FullClassName = 'idltest.services.SuccessData.SuccessDataStruct';

    public getPackageName(): string { return SuccessDataStruct.PackageName; }
    public getClassName(): string { return SuccessDataStruct.ClassName; }
    public getFullClassName(): string { return SuccessDataStruct.FullClassName; }

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

    constructor(data: SuccessDataStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.greeting = data.greeting;
    }

    public serialize(): SuccessDataStructSerialized {
        return {
            'greeting': this.greeting
        };
    }

    // Polymorphic section below. If a new type to be registered, use SuccessDataStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: SuccessDataStruct | SuccessDataStructSerialized): SuccessData}} = {
        [SuccessDataStruct.FullClassName]: SuccessDataStruct
    };

    public static register(className: string, ctor: {new (data?: SuccessDataStruct | SuccessDataStructSerialized): SuccessData}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: SuccessDataStructSerialized}): SuccessData {
        const polymorphicId = Object.keys(data)[0];
        const ctor = SuccessDataStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for SuccessDataStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

SuccessDataStruct.register(SuccessDataStruct.FullClassName, SuccessDataStruct);
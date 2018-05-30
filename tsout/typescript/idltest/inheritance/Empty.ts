// Auto-generated, any modifications may be overwritten in the future.

// Empty Interface
export interface Empty {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): EmptyStructSerialized;
}
export interface EmptyStructSerialized {
}

export class EmptyStruct implements Empty {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance.Empty';
    public static readonly ClassName = 'EmptyStruct';
    public static readonly FullClassName = 'idltest.inheritance.Empty.EmptyStruct';

    public getPackageName(): string { return EmptyStruct.PackageName; }
    public getClassName(): string { return EmptyStruct.ClassName; }
    public getFullClassName(): string { return EmptyStruct.FullClassName; }

    constructor(data: EmptyStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): EmptyStructSerialized {
        return {
        };
    }

    // Polymorphic section below. If a new type to be registered, use EmptyStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: EmptyStruct | EmptyStructSerialized): Empty}} = {
        [EmptyStruct.FullClassName]: EmptyStruct
    };

    public static register(className: string, ctor: {new (data?: EmptyStruct | EmptyStructSerialized): Empty}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: EmptyStructSerialized}): Empty {
        const polymorphicId = Object.keys(data)[0];
        const ctor = EmptyStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for EmptyStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

EmptyStruct.register(EmptyStruct.FullClassName, EmptyStruct);
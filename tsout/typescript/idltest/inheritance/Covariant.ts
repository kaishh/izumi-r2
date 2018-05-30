// Auto-generated, any modifications may be overwritten in the future.

// Covariant Interface
export interface Covariant {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): CovariantStructSerialized;
}
export interface CovariantStructSerialized {
}

export class CovariantStruct implements Covariant {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance.Covariant';
    public static readonly ClassName = 'CovariantStruct';
    public static readonly FullClassName = 'idltest.inheritance.Covariant.CovariantStruct';

    public getPackageName(): string { return CovariantStruct.PackageName; }
    public getClassName(): string { return CovariantStruct.ClassName; }
    public getFullClassName(): string { return CovariantStruct.FullClassName; }

    constructor(data: CovariantStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): CovariantStructSerialized {
        return {
        };
    }

    // Polymorphic section below. If a new type to be registered, use CovariantStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: CovariantStruct | CovariantStructSerialized): Covariant}} = {
        [CovariantStruct.FullClassName]: CovariantStruct
    };

    public static register(className: string, ctor: {new (data?: CovariantStruct | CovariantStructSerialized): Covariant}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: CovariantStructSerialized}): Covariant {
        const polymorphicId = Object.keys(data)[0];
        const ctor = CovariantStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for CovariantStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

CovariantStruct.register(CovariantStruct.FullClassName, CovariantStruct);
// Auto-generated, any modifications may be overwritten in the future.
import { Covariant, CovariantStruct, CovariantStructSerialized } from './Covariant';

// CovariantB Interface
export interface CovariantB extends Covariant {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): CovariantBStructSerialized;
}
export interface CovariantBStructSerialized extends CovariantStructSerialized {
}

export class CovariantBStruct implements CovariantB {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance.CovariantB';
    public static readonly ClassName = 'CovariantBStruct';
    public static readonly FullClassName = 'idltest.inheritance.CovariantB.CovariantBStruct';

    public getPackageName(): string { return CovariantBStruct.PackageName; }
    public getClassName(): string { return CovariantBStruct.ClassName; }
    public getFullClassName(): string { return CovariantBStruct.FullClassName; }

    constructor(data: CovariantBStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): CovariantBStructSerialized {
        return {
        };
    }

    // Polymorphic section below. If a new type to be registered, use CovariantBStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: CovariantBStruct | CovariantBStructSerialized): CovariantB}} = {
        [CovariantBStruct.FullClassName]: CovariantBStruct
    };

    public static register(className: string, ctor: {new (data?: CovariantBStruct | CovariantBStructSerialized): CovariantB}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: CovariantBStructSerialized}): CovariantB {
        const polymorphicId = Object.keys(data)[0];
        const ctor = CovariantBStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for CovariantBStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

CovariantBStruct.register(CovariantBStruct.FullClassName, CovariantBStruct);
CovariantStruct.register(CovariantBStruct.FullClassName, CovariantBStruct);
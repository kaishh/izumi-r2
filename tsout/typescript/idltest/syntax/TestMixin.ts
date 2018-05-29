// Auto-generated, any modifications may be overwritten in the future.

// TestMixin Interface
export interface TestMixin {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;
}
export interface StructSerialized {
}

export class Struct implements TestMixin {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.syntax.TestMixin';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.syntax.TestMixin.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): StructSerialized {
        return {
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): TestMixin}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): TestMixin}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): TestMixin {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
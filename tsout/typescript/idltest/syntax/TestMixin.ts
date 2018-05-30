// Auto-generated, any modifications may be overwritten in the future.

// TestMixin Interface
export interface TestMixin {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TestMixinStructSerialized;
}
export interface TestMixinStructSerialized {
}

export class TestMixinStruct implements TestMixin {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.syntax.TestMixin';
    public static readonly ClassName = 'TestMixinStruct';
    public static readonly FullClassName = 'idltest.syntax.TestMixin.TestMixinStruct';

    public getPackageName(): string { return TestMixinStruct.PackageName; }
    public getClassName(): string { return TestMixinStruct.ClassName; }
    public getFullClassName(): string { return TestMixinStruct.FullClassName; }

    constructor(data: TestMixinStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): TestMixinStructSerialized {
        return {
        };
    }

    // Polymorphic section below. If a new type to be registered, use TestMixinStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TestMixinStruct | TestMixinStructSerialized): TestMixin}} = {
        [TestMixinStruct.FullClassName]: TestMixinStruct
    };

    public static register(className: string, ctor: {new (data?: TestMixinStruct | TestMixinStructSerialized): TestMixin}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TestMixinStructSerialized}): TestMixin {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TestMixinStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TestMixinStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TestMixinStruct.register(TestMixinStruct.FullClassName, TestMixinStruct);
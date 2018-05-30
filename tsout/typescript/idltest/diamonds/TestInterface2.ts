// Auto-generated, any modifications may be overwritten in the future.

// TestInterface2 Interface
export interface TestInterface2 {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TestInterface2StructSerialized;

    sameEverywhereField: number;
    sameField: number;
    if2Field: number;
}

export interface TestInterface2StructSerialized {
    sameEverywhereField: number;
    sameField: number;
    if2Field: number;
}

export class TestInterface2Struct implements TestInterface2 {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.diamonds.TestInterface2';
    public static readonly ClassName = 'TestInterface2Struct';
    public static readonly FullClassName = 'idltest.diamonds.TestInterface2.TestInterface2Struct';

    public getPackageName(): string { return TestInterface2Struct.PackageName; }
    public getClassName(): string { return TestInterface2Struct.ClassName; }
    public getFullClassName(): string { return TestInterface2Struct.FullClassName; }

    private _sameEverywhereField: number;
    private _sameField: number;
    private _if2Field: number;

    public get sameEverywhereField(): number {
        return this._sameEverywhereField;
    }

    public set sameEverywhereField(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field sameEverywhereField is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field sameEverywhereField expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field sameEverywhereField is expected to be an integer, got ' + value);
        }

        this._sameEverywhereField = value;
    }

    public get sameField(): number {
        return this._sameField;
    }

    public set sameField(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field sameField is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field sameField expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field sameField is expected to be an integer, got ' + value);
        }

        this._sameField = value;
    }

    public get if2Field(): number {
        return this._if2Field;
    }

    public set if2Field(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field if2Field is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field if2Field expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field if2Field is expected to be an integer, got ' + value);
        }

        this._if2Field = value;
    }

    constructor(data: TestInterface2StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.sameEverywhereField = data.sameEverywhereField;
        this.sameField = data.sameField;
        this.if2Field = data.if2Field;
    }

    public serialize(): TestInterface2StructSerialized {
        return {
            'sameEverywhereField': this.sameEverywhereField,
            'sameField': this.sameField,
            'if2Field': this.if2Field
        };
    }

    // Polymorphic section below. If a new type to be registered, use TestInterface2Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TestInterface2Struct | TestInterface2StructSerialized): TestInterface2}} = {
        [TestInterface2Struct.FullClassName]: TestInterface2Struct
    };

    public static register(className: string, ctor: {new (data?: TestInterface2Struct | TestInterface2StructSerialized): TestInterface2}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TestInterface2StructSerialized}): TestInterface2 {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TestInterface2Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TestInterface2Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TestInterface2Struct.register(TestInterface2Struct.FullClassName, TestInterface2Struct);
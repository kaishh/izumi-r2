// Auto-generated, any modifications may be overwritten in the future.

// TestInterface1 Interface
export interface TestInterface1 {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TestInterface1StructSerialized;

    sameEverywhereField: number;
    if1Field_inherited: number;
    sameField: number;
    if1Field_overriden: number;
}

export interface TestInterface1StructSerialized {
    sameEverywhereField: number;
    if1Field_inherited: number;
    sameField: number;
    if1Field_overriden: number;
}

export class TestInterface1Struct implements TestInterface1 {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.diamonds.TestInterface1';
    public static readonly ClassName = 'TestInterface1Struct';
    public static readonly FullClassName = 'idltest.diamonds.TestInterface1.TestInterface1Struct';

    public getPackageName(): string { return TestInterface1Struct.PackageName; }
    public getClassName(): string { return TestInterface1Struct.ClassName; }
    public getFullClassName(): string { return TestInterface1Struct.FullClassName; }

    private _sameEverywhereField: number;
    private _if1Field_inherited: number;
    private _sameField: number;
    private _if1Field_overriden: number;

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

    public get if1Field_inherited(): number {
        return this._if1Field_inherited;
    }

    public set if1Field_inherited(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field if1Field_inherited is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field if1Field_inherited expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field if1Field_inherited is expected to be an integer, got ' + value);
        }

        this._if1Field_inherited = value;
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

    public get if1Field_overriden(): number {
        return this._if1Field_overriden;
    }

    public set if1Field_overriden(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field if1Field_overriden is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field if1Field_overriden expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field if1Field_overriden is expected to be an integer, got ' + value);
        }

        this._if1Field_overriden = value;
    }

    constructor(data: TestInterface1StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.sameEverywhereField = data.sameEverywhereField;
        this.if1Field_inherited = data.if1Field_inherited;
        this.sameField = data.sameField;
        this.if1Field_overriden = data.if1Field_overriden;
    }

    public serialize(): TestInterface1StructSerialized {
        return {
            'sameEverywhereField': this.sameEverywhereField,
            'if1Field_inherited': this.if1Field_inherited,
            'sameField': this.sameField,
            'if1Field_overriden': this.if1Field_overriden
        };
    }

    // Polymorphic section below. If a new type to be registered, use TestInterface1Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TestInterface1Struct | TestInterface1StructSerialized): TestInterface1}} = {
        [TestInterface1Struct.FullClassName]: TestInterface1Struct
    };

    public static register(className: string, ctor: {new (data?: TestInterface1Struct | TestInterface1StructSerialized): TestInterface1}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TestInterface1StructSerialized}): TestInterface1 {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TestInterface1Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TestInterface1Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TestInterface1Struct.register(TestInterface1Struct.FullClassName, TestInterface1Struct);
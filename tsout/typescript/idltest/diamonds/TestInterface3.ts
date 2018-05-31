// Auto-generated, any modifications may be overwritten in the future.
import { TestInterface1Struct, TestInterface1StructSerialized } from './TestInterface1';

// TestInterface3 Interface
export interface TestInterface3 {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): TestInterface3StructSerialized;

    if3Field: number;
    if1Field_inherited: number;
    sameField: number;
    sameEverywhereField: number;
    if1Field_overriden: number;
}

export interface TestInterface3StructSerialized {
    if3Field: number;
    if1Field_inherited: number;
    sameField: number;
    sameEverywhereField: number;
    if1Field_overriden: number;
}

export class TestInterface3Struct implements TestInterface3 {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.diamonds.TestInterface3';
    public static readonly ClassName = 'TestInterface3Struct';
    public static readonly FullClassName = 'idltest.diamonds.TestInterface3.TestInterface3Struct';

    public getPackageName(): string { return TestInterface3Struct.PackageName; }
    public getClassName(): string { return TestInterface3Struct.ClassName; }
    public getFullClassName(): string { return TestInterface3Struct.FullClassName; }

    private _if3Field: number;
    private _if1Field_inherited: number;
    private _sameField: number;
    private _sameEverywhereField: number;
    private _if1Field_overriden: number;

    public get if3Field(): number {
        return this._if3Field;
    }

    public set if3Field(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field if3Field is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field if3Field expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field if3Field is expected to be an integer, got ' + value);
        }

        this._if3Field = value;
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

    constructor(data: TestInterface3StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.if3Field = data.if3Field;
        this.if1Field_inherited = data.if1Field_inherited;
        this.sameEverywhereField = data.sameEverywhereField;
        this.sameField = data.sameField;
        this.if1Field_overriden = data.if1Field_overriden;
    }

    public serialize(): TestInterface3StructSerialized {
        return {
            'if3Field': this.if3Field,
            'if1Field_inherited': this.if1Field_inherited,
            'sameEverywhereField': this.sameEverywhereField,
            'sameField': this.sameField,
            'if1Field_overriden': this.if1Field_overriden
        };
    }

    // Polymorphic section below. If a new type to be registered, use TestInterface3Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: TestInterface3Struct | TestInterface3StructSerialized): TestInterface3}} = {
        [TestInterface3Struct.FullClassName]: TestInterface3Struct
    };

    public static register(className: string, ctor: {new (data?: TestInterface3Struct | TestInterface3StructSerialized): TestInterface3}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: TestInterface3StructSerialized}): TestInterface3 {
        const polymorphicId = Object.keys(data)[0];
        const ctor = TestInterface3Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for TestInterface3Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

TestInterface3Struct.register(TestInterface3Struct.FullClassName, TestInterface3Struct);
TestInterface1Struct.register(TestInterface3Struct.FullClassName, TestInterface3Struct);
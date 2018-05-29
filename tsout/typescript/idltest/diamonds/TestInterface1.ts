// Auto-generated, any modifications may be overwritten in the future.

// TestInterface1 Interface
export interface TestInterface1 {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    sameEverywhereField: number;
    if1Field_inherited: number;
    sameField: number;
    if1Field_overriden: number;
}

export interface StructSerialized {
    sameEverywhereField: number;
    if1Field_inherited: number;
    sameField: number;
    if1Field_overriden: number;
}

export class Struct implements TestInterface1 {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.diamonds.TestInterface1';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.diamonds.TestInterface1.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

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

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.sameEverywhereField = data.sameEverywhereField;
        this.if1Field_inherited = data.if1Field_inherited;
        this.sameField = data.sameField;
        this.if1Field_overriden = data.if1Field_overriden;
    }

    public serialize(): StructSerialized {
        return {
            'sameEverywhereField': this.sameEverywhereField,
            'if1Field_inherited': this.if1Field_inherited,
            'sameField': this.sameField,
            'if1Field_overriden': this.if1Field_overriden
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): TestInterface1}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): TestInterface1}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): TestInterface1 {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
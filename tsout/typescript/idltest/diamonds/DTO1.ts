// Auto-generated, any modifications may be overwritten in the future.
import { Struct, StructSerialized } from './TestInterface1';
import { Struct, StructSerialized } from './TestInterface3';
import { Struct, StructSerialized } from './TestInterface2';

// DTO1 DTO
export class DTO1  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.diamonds';
    public static readonly ClassName = 'DTO1';
    public static readonly FullClassName = 'idltest.diamonds.DTO1';

    public getPackageName(): string { return DTO1.PackageName; }
    public getClassName(): string { return DTO1.ClassName; }
    public getFullClassName(): string { return DTO1.FullClassName; }

    private _if3Field: number;
    private _if1Field_inherited: number;
    private _if2Field: number;
    private _sameEverywhereField: number;
    private _sameField: number;
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

    constructor(data: DTO1Serialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.if3Field = data.if3Field;
        this.if1Field_inherited = data.if1Field_inherited;
        this.if2Field = data.if2Field;
        this.sameEverywhereField = data.sameEverywhereField;
        this.sameField = data.sameField;
        this.if1Field_overriden = data.if1Field_overriden;
    }

    public serialize(): DTO1Serialized {
        return {
            'if3Field': this.if3Field,
            'if1Field_inherited': this.if1Field_inherited,
            'if2Field': this.if2Field,
            'sameEverywhereField': this.sameEverywhereField,
            'sameField': this.sameField,
            'if1Field_overriden': this.if1Field_overriden
        };
    }
}

export interface DTO1Serialized  {
    if3Field: number;
    if1Field_inherited: number;
    if2Field: number;
    sameEverywhereField: number;
    sameField: number;
    if1Field_overriden: number;
}

Struct.register(DTO1.FullClassName, DTO1);
Struct.register(DTO1.FullClassName, DTO1);
Struct.register(DTO1.FullClassName, DTO1);
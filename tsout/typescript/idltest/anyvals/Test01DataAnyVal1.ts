// Auto-generated, any modifications may be overwritten in the future.
import { Test01MixinAnyVal, Struct, StructSerialized } from './Test01MixinAnyVal';

// Test01DataAnyVal1 DTO
export class Test01DataAnyVal1 implements Test01MixinAnyVal  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals';
    public static readonly ClassName = 'Test01DataAnyVal1';
    public static readonly FullClassName = 'idltest.anyvals.Test01DataAnyVal1';

    public getPackageName(): string { return Test01DataAnyVal1.PackageName; }
    public getClassName(): string { return Test01DataAnyVal1.ClassName; }
    public getFullClassName(): string { return Test01DataAnyVal1.FullClassName; }

    private _str: string;
    private _i08: number;

    public get str(): string {
        return this._str;
    }

    public set str(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field str is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field str expects type string, got ' + value);
        }

        this._str = value;
    }

    public get i08(): number {
        return this._i08;
    }

    public set i08(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field i08 is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field i08 expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field i08 is expected to be an integer, got ' + value);
        }

        if (value < -128) {
            throw new Error('Field i08 is expected to be not less than -128, got ' + value);
        }

        if (value > 127) {
            throw new Error('Field i08 is expected to be not greater than 127, got ' + value);
        }

        this._i08 = value;
    }

    constructor(data: Test01DataAnyVal1Serialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
        this.i08 = data.i08;
    }

    public toTest01MixinAnyVal(): StructSerialized {
        return {
            'str': this.str
        };
    }

    public serialize(): Test01DataAnyVal1Serialized {
        return {
            'str': this.str,
            'i08': this.i08
        };
    }
}

export interface Test01DataAnyVal1Serialized extends StructSerialized  {
    str: string;
    i08: number;
}

Struct.register(Test01DataAnyVal1.FullClassName, Test01DataAnyVal1);
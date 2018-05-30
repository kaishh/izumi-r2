// Auto-generated, any modifications may be overwritten in the future.
import { Test01MixinAnyValStruct, Test01MixinAnyValStructSerialized } from './Test01MixinAnyVal';

// Test01DataAnyVal2 DTO
export class Test01DataAnyVal2  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals';
    public static readonly ClassName = 'Test01DataAnyVal2';
    public static readonly FullClassName = 'idltest.anyvals.Test01DataAnyVal2';

    public getPackageName(): string { return Test01DataAnyVal2.PackageName; }
    public getClassName(): string { return Test01DataAnyVal2.ClassName; }
    public getFullClassName(): string { return Test01DataAnyVal2.FullClassName; }

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

    constructor(data: Test01DataAnyVal2Serialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
        this.i08 = data.i08;
    }

    public serialize(): Test01DataAnyVal2Serialized {
        return {
            'str': this.str,
            'i08': this.i08
        };
    }
}

export interface Test01DataAnyVal2Serialized  {
    str: string;
    i08: number;
}

Test01MixinAnyValStruct.register(Test01DataAnyVal2.FullClassName, Test01DataAnyVal2);
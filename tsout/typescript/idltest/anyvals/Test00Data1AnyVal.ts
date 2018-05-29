// Auto-generated, any modifications may be overwritten in the future.

// Test00Data1AnyVal DTO
export class Test00Data1AnyVal  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals';
    public static readonly ClassName = 'Test00Data1AnyVal';
    public static readonly FullClassName = 'idltest.anyvals.Test00Data1AnyVal';

    public getPackageName(): string { return Test00Data1AnyVal.PackageName; }
    public getClassName(): string { return Test00Data1AnyVal.ClassName; }
    public getFullClassName(): string { return Test00Data1AnyVal.FullClassName; }

    private _str: string;

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

    constructor(data: Test00Data1AnyValSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
    }

    public serialize(): Test00Data1AnyValSerialized {
        return {
            'str': this.str
        };
    }
}

export interface Test00Data1AnyValSerialized  {
    str: string;
}
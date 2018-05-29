// Auto-generated, any modifications may be overwritten in the future.

// Test02DtoAnyVal DTO
export class Test02DtoAnyVal  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals';
    public static readonly ClassName = 'Test02DtoAnyVal';
    public static readonly FullClassName = 'idltest.anyvals.Test02DtoAnyVal';

    public getPackageName(): string { return Test02DtoAnyVal.PackageName; }
    public getClassName(): string { return Test02DtoAnyVal.ClassName; }
    public getFullClassName(): string { return Test02DtoAnyVal.FullClassName; }

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

    constructor(data: Test02DtoAnyValSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
    }

    public serialize(): Test02DtoAnyValSerialized {
        return {
            'str': this.str
        };
    }
}

export interface Test02DtoAnyValSerialized  {
    str: string;
}
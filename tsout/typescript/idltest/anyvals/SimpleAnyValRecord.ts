// Auto-generated, any modifications may be overwritten in the future.

// SimpleAnyValRecord DTO
export class SimpleAnyValRecord  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals';
    public static readonly ClassName = 'SimpleAnyValRecord';
    public static readonly FullClassName = 'idltest.anyvals.SimpleAnyValRecord';

    public getPackageName(): string { return SimpleAnyValRecord.PackageName; }
    public getClassName(): string { return SimpleAnyValRecord.ClassName; }
    public getFullClassName(): string { return SimpleAnyValRecord.FullClassName; }

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

    constructor(data: SimpleAnyValRecordSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
    }

    public serialize(): SimpleAnyValRecordSerialized {
        return {
            'str': this.str
        };
    }
}

export interface SimpleAnyValRecordSerialized  {
    str: string;
}
// Auto-generated, any modifications may be overwritten in the future.

// ParameterDTO DTO
export class ParameterDTO  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.datainheritance';
    public static readonly ClassName = 'ParameterDTO';
    public static readonly FullClassName = 'idltest.datainheritance.ParameterDTO';

    public getPackageName(): string { return ParameterDTO.PackageName; }
    public getClassName(): string { return ParameterDTO.ClassName; }
    public getFullClassName(): string { return ParameterDTO.FullClassName; }

    private _str: string;
    private _i32: number;

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

    public get i32(): number {
        return this._i32;
    }

    public set i32(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field i32 is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field i32 expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field i32 is expected to be an integer, got ' + value);
        }

        this._i32 = value;
    }

    constructor(data: ParameterDTOSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
        this.i32 = data.i32;
    }

    public serialize(): ParameterDTOSerialized {
        return {
            'str': this.str,
            'i32': this.i32
        };
    }
}

export interface ParameterDTOSerialized  {
    str: string;
    i32: number;
}
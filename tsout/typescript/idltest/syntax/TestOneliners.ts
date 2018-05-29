// Auto-generated, any modifications may be overwritten in the future.
import { TestDto, TestDtoSerialized } from './TestDto';

// TestOneliners DTO
export class TestOneliners  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.syntax';
    public static readonly ClassName = 'TestOneliners';
    public static readonly FullClassName = 'idltest.syntax.TestOneliners';

    public getPackageName(): string { return TestOneliners.PackageName; }
    public getClassName(): string { return TestOneliners.ClassName; }
    public getFullClassName(): string { return TestOneliners.FullClassName; }

    private _str: string;
    private _testDto: TestDto;
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

    public get testDto(): TestDto {
        return this._testDto;
    }

    public set testDto(value: TestDto) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field testDto is not optional');
        }
        this._testDto = value;
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

    constructor(data: TestOnelinersSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
        this.testDto = new TestDto(data.testDto);
        this.i08 = data.i08;
    }

    public serialize(): TestOnelinersSerialized {
        return {
            'str': this.str,
            'testDto': this.testDto.serialize(),
            'i08': this.i08
        };
    }
}

export interface TestOnelinersSerialized  {
    str: string;
    testDto: TestDtoSerialized;
    i08: number;
}
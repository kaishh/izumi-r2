// Auto-generated, any modifications may be overwritten in the future.
import { TestMixin, TestMixinStruct, TestMixinStructSerialized } from './TestMixin';

// TestDto DTO
export class TestDto  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.syntax';
    public static readonly ClassName = 'TestDto';
    public static readonly FullClassName = 'idltest.syntax.TestDto';

    public getPackageName(): string { return TestDto.PackageName; }
    public getClassName(): string { return TestDto.ClassName; }
    public getFullClassName(): string { return TestDto.FullClassName; }

    private _testMixin: TestMixin;

    public get testMixin(): TestMixin {
        return this._testMixin;
    }

    public set testMixin(value: TestMixin) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field testMixin is not optional');
        }
        this._testMixin = value;
    }

    constructor(data: TestDtoSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.testMixin = TestMixinStruct.create(data.testMixin);
    }

    public serialize(): TestDtoSerialized {
        return {
            'testMixin': {[this.testMixin.getFullClassName()]: this.testMixin.serialize()}
        };
    }
}

export interface TestDtoSerialized  {
    testMixin: {[key: string]: TestMixinStructSerialized};
}
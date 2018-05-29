// Auto-generated, any modifications may be overwritten in the future.

// TestEnum Enumeration
export enum TestEnum {
    Element1 = 'Element1',
    Element2 = 'Element2'
}

export class TestEnumHelpers {
    public static readonly all = [
        TestEnum.Element1,
        TestEnum.Element2
    ]

    public static isValid(value: string): boolean {
        return TestEnumHelpers.all.indexOf(value as TestEnum) >= 0;
    }
}
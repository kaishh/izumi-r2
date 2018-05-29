// Auto-generated, any modifications may be overwritten in the future.

// ShortSyntaxEnum Enumeration
export enum ShortSyntaxEnum {
    Element1 = 'Element1',
    Element2 = 'Element2'
}

export class ShortSyntaxEnumHelpers {
    public static readonly all = [
        ShortSyntaxEnum.Element1,
        ShortSyntaxEnum.Element2
    ]

    public static isValid(value: string): boolean {
        return ShortSyntaxEnumHelpers.all.indexOf(value as ShortSyntaxEnum) >= 0;
    }
}
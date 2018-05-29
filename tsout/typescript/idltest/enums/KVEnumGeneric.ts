// Auto-generated, any modifications may be overwritten in the future.
import { TestEnum } from './TestEnum';

// KVEnumGeneric DTO
export class KVEnumGeneric  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.enums';
    public static readonly ClassName = 'KVEnumGeneric';
    public static readonly FullClassName = 'idltest.enums.KVEnumGeneric';

    public getPackageName(): string { return KVEnumGeneric.PackageName; }
    public getClassName(): string { return KVEnumGeneric.ClassName; }
    public getFullClassName(): string { return KVEnumGeneric.FullClassName; }

    private _test: {[key: TestEnum]: TestEnum};

    public get test(): {[key: TestEnum]: TestEnum} {
        return this._test;
    }

    public set test(value: {[key: TestEnum]: TestEnum}) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field test is not optional');
        }
        this._test = value;
    }

    constructor(data: KVEnumGenericSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.test = Object.keys(data.test).reduce((previous, current) => {previous[current] = data.test[current]; return previous; }, {});
    }

    public serialize(): KVEnumGenericSerialized {
        return {
            'test': Object.keys(this.test).reduce((previous, current) => {previous[current] = this.test[current]; return previous; }, {})
        };
    }
}

export interface KVEnumGenericSerialized  {
    test: {[key: string]: TestEnum};
}
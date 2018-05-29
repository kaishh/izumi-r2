// Auto-generated, any modifications may be overwritten in the future.
import { BucketID } from './BucketID';

// KVIDGeneric DTO
export class KVIDGeneric  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.identifiers';
    public static readonly ClassName = 'KVIDGeneric';
    public static readonly FullClassName = 'idltest.identifiers.KVIDGeneric';

    public getPackageName(): string { return KVIDGeneric.PackageName; }
    public getClassName(): string { return KVIDGeneric.ClassName; }
    public getFullClassName(): string { return KVIDGeneric.FullClassName; }

    private _test: {[key: BucketID]: BucketID};

    public get test(): {[key: BucketID]: BucketID} {
        return this._test;
    }

    public set test(value: {[key: BucketID]: BucketID}) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field test is not optional');
        }
        this._test = value;
    }

    constructor(data: KVIDGenericSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.test = Object.keys(data.test).reduce((previous, current) => {previous[current] = new BucketID(data.test[current]); return previous; }, {});
    }

    public serialize(): KVIDGenericSerialized {
        return {
            'test': Object.keys(this.test).reduce((previous, current) => {previous[current] = this.test[current].serialize(); return previous; }, {})
        };
    }
}

export interface KVIDGenericSerialized  {
    test: {[key: string]: string};
}
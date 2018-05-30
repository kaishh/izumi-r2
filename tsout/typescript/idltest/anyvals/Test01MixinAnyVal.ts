// Auto-generated, any modifications may be overwritten in the future.

// Test01MixinAnyVal Interface
export interface Test01MixinAnyVal {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): Test01MixinAnyValStructSerialized;

    str: string;
}

export interface Test01MixinAnyValStructSerialized {
    str: string;
}

export class Test01MixinAnyValStruct implements Test01MixinAnyVal {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals.Test01MixinAnyVal';
    public static readonly ClassName = 'Test01MixinAnyValStruct';
    public static readonly FullClassName = 'idltest.anyvals.Test01MixinAnyVal.Test01MixinAnyValStruct';

    public getPackageName(): string { return Test01MixinAnyValStruct.PackageName; }
    public getClassName(): string { return Test01MixinAnyValStruct.ClassName; }
    public getFullClassName(): string { return Test01MixinAnyValStruct.FullClassName; }

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

    constructor(data: Test01MixinAnyValStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.str = data.str;
    }

    public serialize(): Test01MixinAnyValStructSerialized {
        return {
            'str': this.str
        };
    }

    // Polymorphic section below. If a new type to be registered, use Test01MixinAnyValStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Test01MixinAnyValStruct | Test01MixinAnyValStructSerialized): Test01MixinAnyVal}} = {
        [Test01MixinAnyValStruct.FullClassName]: Test01MixinAnyValStruct
    };

    public static register(className: string, ctor: {new (data?: Test01MixinAnyValStruct | Test01MixinAnyValStructSerialized): Test01MixinAnyVal}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: Test01MixinAnyValStructSerialized}): Test01MixinAnyVal {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Test01MixinAnyValStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Test01MixinAnyValStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Test01MixinAnyValStruct.register(Test01MixinAnyValStruct.FullClassName, Test01MixinAnyValStruct);
// Auto-generated, any modifications may be overwritten in the future.
import { Covariant, CovariantStruct, CovariantStructSerialized } from './Covariant';

// WithCovariance Interface
export interface WithCovariance {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): WithCovarianceStructSerialized;

    field: Covariant;
}

export interface WithCovarianceStructSerialized {
    field: {[key: string]: CovariantStructSerialized};
}

export class WithCovarianceStruct implements WithCovariance {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance.WithCovariance';
    public static readonly ClassName = 'WithCovarianceStruct';
    public static readonly FullClassName = 'idltest.inheritance.WithCovariance.WithCovarianceStruct';

    public getPackageName(): string { return WithCovarianceStruct.PackageName; }
    public getClassName(): string { return WithCovarianceStruct.ClassName; }
    public getFullClassName(): string { return WithCovarianceStruct.FullClassName; }

    private _field: Covariant;

    public get field(): Covariant {
        return this._field;
    }

    public set field(value: Covariant) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field field is not optional');
        }
        this._field = value;
    }

    constructor(data: WithCovarianceStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.field = CovariantStruct.create(data.field);
    }

    public serialize(): WithCovarianceStructSerialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }

    // Polymorphic section below. If a new type to be registered, use WithCovarianceStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: WithCovarianceStruct | WithCovarianceStructSerialized): WithCovariance}} = {
        [WithCovarianceStruct.FullClassName]: WithCovarianceStruct
    };

    public static register(className: string, ctor: {new (data?: WithCovarianceStruct | WithCovarianceStructSerialized): WithCovariance}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: WithCovarianceStructSerialized}): WithCovariance {
        const polymorphicId = Object.keys(data)[0];
        const ctor = WithCovarianceStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for WithCovarianceStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

WithCovarianceStruct.register(WithCovarianceStruct.FullClassName, WithCovarianceStruct);
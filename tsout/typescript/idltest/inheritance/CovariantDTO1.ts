// Auto-generated, any modifications may be overwritten in the future.
import { WithCovariance, WithCovarianceStruct, WithCovarianceStructSerialized } from './WithCovariance';
import { Covariant, CovariantStruct, CovariantStructSerialized } from './Covariant';

// CovariantDTO1 DTO
export class CovariantDTO1 implements WithCovariance  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance';
    public static readonly ClassName = 'CovariantDTO1';
    public static readonly FullClassName = 'idltest.inheritance.CovariantDTO1';

    public getPackageName(): string { return CovariantDTO1.PackageName; }
    public getClassName(): string { return CovariantDTO1.ClassName; }
    public getFullClassName(): string { return CovariantDTO1.FullClassName; }

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

    constructor(data: CovariantDTO1Serialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.field = CovariantStruct.create(data.field);
    }

    public toWithCovariance(): WithCovarianceStructSerialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }

    public serialize(): CovariantDTO1Serialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }
}

export interface CovariantDTO1Serialized extends WithCovarianceStructSerialized  {
    field: {[key: string]: CovariantStructSerialized};
}

WithCovarianceStruct.register(CovariantDTO1.FullClassName, CovariantDTO1);
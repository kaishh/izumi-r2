// Auto-generated, any modifications may be overwritten in the future.
import { CovariantA, Struct, StructSerialized } from './CovariantA';
import { Struct, StructSerialized } from './WithCovariance';
import { InheritedCovariant, Struct, StructSerialized } from './InheritedCovariant';

// CovariantDTO2 DTO
export class CovariantDTO2 implements InheritedCovariant  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance';
    public static readonly ClassName = 'CovariantDTO2';
    public static readonly FullClassName = 'idltest.inheritance.CovariantDTO2';

    public getPackageName(): string { return CovariantDTO2.PackageName; }
    public getClassName(): string { return CovariantDTO2.ClassName; }
    public getFullClassName(): string { return CovariantDTO2.FullClassName; }

    private _field: CovariantA;

    public get field(): CovariantA {
        return this._field;
    }

    public set field(value: CovariantA) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field field is not optional');
        }
        this._field = value;
    }

    constructor(data: CovariantDTO2Serialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.field = CovariantAStruct.create(data.field);
    }

    public toInheritedCovariant(): StructSerialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }

    public serialize(): CovariantDTO2Serialized {
        return {
            'field': {[this.field.getFullClassName()]: this.field.serialize()}
        };
    }
}

export interface CovariantDTO2Serialized extends StructSerialized  {
    field: {[key: string]: StructSerialized};
}

Struct.register(CovariantDTO2.FullClassName, CovariantDTO2);
Struct.register(CovariantDTO2.FullClassName, CovariantDTO2);
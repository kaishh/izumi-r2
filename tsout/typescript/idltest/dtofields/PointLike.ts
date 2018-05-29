// Auto-generated, any modifications may be overwritten in the future.
import { Struct, StructSerialized } from './IntPair';
import { Metadata, Struct, StructSerialized } from './Metadata';

// PointLike Interface
export interface PointLike extends Metadata {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    y: number;
    name: string;
    x: number;
    id: string;
}

export interface StructSerialized extends StructSerialized {
    y: number;
    name: string;
    x: number;
    id: string;
}

export class Struct implements PointLike {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.dtofields.PointLike';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.dtofields.PointLike.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _y: number;
    private _name: string;
    private _x: number;
    private _id: string;

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field y is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field y expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field y is expected to be an integer, got ' + value);
        }

        this._y = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field name is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field name expects type string, got ' + value);
        }

        this._name = value;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field x is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field x expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field x is expected to be an integer, got ' + value);
        }

        this._x = value;
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field id is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field id expects type string, got ' + value);
        }

        this._id = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.y = data.y;
        this.name = data.name;
        this.x = data.x;
        this.id = data.id;
    }

    public serialize(): StructSerialized {
        return {
            'y': this.y,
            'name': this.name,
            'x': this.x,
            'id': this.id
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): PointLike}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): PointLike}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): PointLike {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
Struct.register(Struct.FullClassName, Struct);
Struct.register(Struct.FullClassName, Struct);
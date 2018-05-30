// Auto-generated, any modifications may be overwritten in the future.
import { IntPairStruct, IntPairStructSerialized } from './IntPair';
import { Metadata, MetadataStruct, MetadataStructSerialized } from './Metadata';

// PointLike Interface
export interface PointLike extends Metadata {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): PointLikeStructSerialized;

    y: number;
    name: string;
    x: number;
    id: string;
}

export interface PointLikeStructSerialized extends MetadataStructSerialized {
    y: number;
    name: string;
    x: number;
    id: string;
}

export class PointLikeStruct implements PointLike {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.dtofields.PointLike';
    public static readonly ClassName = 'PointLikeStruct';
    public static readonly FullClassName = 'idltest.dtofields.PointLike.PointLikeStruct';

    public getPackageName(): string { return PointLikeStruct.PackageName; }
    public getClassName(): string { return PointLikeStruct.ClassName; }
    public getFullClassName(): string { return PointLikeStruct.FullClassName; }

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

    constructor(data: PointLikeStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.y = data.y;
        this.name = data.name;
        this.x = data.x;
        this.id = data.id;
    }

    public serialize(): PointLikeStructSerialized {
        return {
            'y': this.y,
            'name': this.name,
            'x': this.x,
            'id': this.id
        };
    }

    // Polymorphic section below. If a new type to be registered, use PointLikeStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: PointLikeStruct | PointLikeStructSerialized): PointLike}} = {
        [PointLikeStruct.FullClassName]: PointLikeStruct
    };

    public static register(className: string, ctor: {new (data?: PointLikeStruct | PointLikeStructSerialized): PointLike}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: PointLikeStructSerialized}): PointLike {
        const polymorphicId = Object.keys(data)[0];
        const ctor = PointLikeStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for PointLikeStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

PointLikeStruct.register(PointLikeStruct.FullClassName, PointLikeStruct);
MetadataStruct.register(PointLikeStruct.FullClassName, PointLikeStruct);
IntPairStruct.register(PointLikeStruct.FullClassName, PointLikeStruct);
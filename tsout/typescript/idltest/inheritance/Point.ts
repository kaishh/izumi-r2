// Auto-generated, any modifications may be overwritten in the future.
import { Struct, StructSerialized } from './IntPair';
import { Metadata, Struct, StructSerialized } from './Metadata';

// Point DTO
export class Point implements Metadata  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.inheritance';
    public static readonly ClassName = 'Point';
    public static readonly FullClassName = 'idltest.inheritance.Point';

    public getPackageName(): string { return Point.PackageName; }
    public getClassName(): string { return Point.ClassName; }
    public getFullClassName(): string { return Point.FullClassName; }

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

    constructor(data: PointSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.y = data.y;
        this.name = data.name;
        this.x = data.x;
        this.id = data.id;
    }

    public toMetadata(): StructSerialized {
        return {
            'name': this.name,
            'id': this.id
        };
    }

    public serialize(): PointSerialized {
        return {
            'y': this.y,
            'name': this.name,
            'x': this.x,
            'id': this.id
        };
    }
}

export interface PointSerialized extends StructSerialized  {
    y: number;
    name: string;
    x: number;
    id: string;
}

Struct.register(Point.FullClassName, Point);
Struct.register(Point.FullClassName, Point);
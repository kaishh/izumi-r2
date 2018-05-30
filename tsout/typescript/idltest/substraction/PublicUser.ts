// Auto-generated, any modifications may be overwritten in the future.
import { UserStruct, UserStructSerialized } from './User';

// PublicUser Interface
export interface PublicUser {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): PublicUserStructSerialized;

    name: string;
    id: string;
}

export interface PublicUserStructSerialized {
    name: string;
    id: string;
}

export class PublicUserStruct implements PublicUser {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.substraction.PublicUser';
    public static readonly ClassName = 'PublicUserStruct';
    public static readonly FullClassName = 'idltest.substraction.PublicUser.PublicUserStruct';

    public getPackageName(): string { return PublicUserStruct.PackageName; }
    public getClassName(): string { return PublicUserStruct.ClassName; }
    public getFullClassName(): string { return PublicUserStruct.FullClassName; }

    private _name: string;
    private _id: string;

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

    constructor(data: PublicUserStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.name = data.name;
        this.id = data.id;
    }

    public serialize(): PublicUserStructSerialized {
        return {
            'name': this.name,
            'id': this.id
        };
    }

    // Polymorphic section below. If a new type to be registered, use PublicUserStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: PublicUserStruct | PublicUserStructSerialized): PublicUser}} = {
        [PublicUserStruct.FullClassName]: PublicUserStruct
    };

    public static register(className: string, ctor: {new (data?: PublicUserStruct | PublicUserStructSerialized): PublicUser}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: PublicUserStructSerialized}): PublicUser {
        const polymorphicId = Object.keys(data)[0];
        const ctor = PublicUserStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for PublicUserStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

PublicUserStruct.register(PublicUserStruct.FullClassName, PublicUserStruct);
UserStruct.register(PublicUserStruct.FullClassName, PublicUserStruct);
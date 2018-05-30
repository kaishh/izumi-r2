// Auto-generated, any modifications may be overwritten in the future.
import { WithRecordId, WithRecordIdStruct, WithRecordIdStructSerialized } from './WithRecordId';

// UserData Interface
export interface UserData {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): UserDataStructSerialized;

    id: WithRecordId;
}

export interface UserDataStructSerialized {
    id: {[key: string]: WithRecordIdStructSerialized};
}

export class UserDataStruct implements UserData {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.anyvals.UserData';
    public static readonly ClassName = 'UserDataStruct';
    public static readonly FullClassName = 'idltest.anyvals.UserData.UserDataStruct';

    public getPackageName(): string { return UserDataStruct.PackageName; }
    public getClassName(): string { return UserDataStruct.ClassName; }
    public getFullClassName(): string { return UserDataStruct.FullClassName; }

    private _id: WithRecordId;

    public get id(): WithRecordId {
        return this._id;
    }

    public set id(value: WithRecordId) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field id is not optional');
        }
        this._id = value;
    }

    constructor(data: UserDataStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.id = WithRecordIdStruct.create(data.id);
    }

    public serialize(): UserDataStructSerialized {
        return {
            'id': {[this.id.getFullClassName()]: this.id.serialize()}
        };
    }

    // Polymorphic section below. If a new type to be registered, use UserDataStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: UserDataStruct | UserDataStructSerialized): UserData}} = {
        [UserDataStruct.FullClassName]: UserDataStruct
    };

    public static register(className: string, ctor: {new (data?: UserDataStruct | UserDataStructSerialized): UserData}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: UserDataStructSerialized}): UserData {
        const polymorphicId = Object.keys(data)[0];
        const ctor = UserDataStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for UserDataStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

UserDataStruct.register(UserDataStruct.FullClassName, UserDataStruct);
// Auto-generated, any modifications may be overwritten in the future.

// User Interface
export interface User {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): UserStructSerialized;

    name: string;
    pass: string;
    id: string;
}

export interface UserStructSerialized {
    name: string;
    pass: string;
    id: string;
}

export class UserStruct implements User {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.substraction.User';
    public static readonly ClassName = 'UserStruct';
    public static readonly FullClassName = 'idltest.substraction.User.UserStruct';

    public getPackageName(): string { return UserStruct.PackageName; }
    public getClassName(): string { return UserStruct.ClassName; }
    public getFullClassName(): string { return UserStruct.FullClassName; }

    private _name: string;
    private _pass: string;
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

    public get pass(): string {
        return this._pass;
    }

    public set pass(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field pass is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field pass expects type string, got ' + value);
        }

        this._pass = value;
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

    constructor(data: UserStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.name = data.name;
        this.pass = data.pass;
        this.id = data.id;
    }

    public serialize(): UserStructSerialized {
        return {
            'name': this.name,
            'pass': this.pass,
            'id': this.id
        };
    }

    // Polymorphic section below. If a new type to be registered, use UserStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: UserStruct | UserStructSerialized): User}} = {
        [UserStruct.FullClassName]: UserStruct
    };

    public static register(className: string, ctor: {new (data?: UserStruct | UserStructSerialized): User}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: UserStructSerialized}): User {
        const polymorphicId = Object.keys(data)[0];
        const ctor = UserStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for UserStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

UserStruct.register(UserStruct.FullClassName, UserStruct);
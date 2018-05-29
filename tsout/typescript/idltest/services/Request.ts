// Auto-generated, any modifications may be overwritten in the future.

// Request Interface
export interface Request {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): StructSerialized;

    secondName: string;
    firstName: string;
}

export interface StructSerialized {
    secondName: string;
    firstName: string;
}

export class Struct implements Request {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services.Request';
    public static readonly ClassName = 'Struct';
    public static readonly FullClassName = 'idltest.services.Request.Struct';

    public getPackageName(): string { return Struct.PackageName; }
    public getClassName(): string { return Struct.ClassName; }
    public getFullClassName(): string { return Struct.FullClassName; }

    private _secondName: string;
    private _firstName: string;

    public get secondName(): string {
        return this._secondName;
    }

    public set secondName(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field secondName is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field secondName expects type string, got ' + value);
        }

        this._secondName = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field firstName is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field firstName expects type string, got ' + value);
        }

        this._firstName = value;
    }

    constructor(data: StructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.secondName = data.secondName;
        this.firstName = data.firstName;
    }

    public serialize(): StructSerialized {
        return {
            'secondName': this.secondName,
            'firstName': this.firstName
        };
    }

    // Polymorphic section below. If a new type to be registered, use Struct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: Struct | StructSerialized): Request}} = {
        [Struct.FullClassName]: Struct
    };

    public static register(className: string, ctor: {new (data?: Struct | StructSerialized): Request}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: StructSerialized}): Request {
        const polymorphicId = Object.keys(data)[0];
        const ctor = Struct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for Struct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

Struct.register(Struct.FullClassName, Struct);
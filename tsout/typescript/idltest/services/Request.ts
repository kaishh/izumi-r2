// Auto-generated, any modifications may be overwritten in the future.

// Request Interface
export interface Request {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): RequestStructSerialized;

    secondName: string;
    firstName: string;
}

export interface RequestStructSerialized {
    secondName: string;
    firstName: string;
}

export class RequestStruct implements Request {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services.Request';
    public static readonly ClassName = 'RequestStruct';
    public static readonly FullClassName = 'idltest.services.Request.RequestStruct';

    public getPackageName(): string { return RequestStruct.PackageName; }
    public getClassName(): string { return RequestStruct.ClassName; }
    public getFullClassName(): string { return RequestStruct.FullClassName; }

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

    constructor(data: RequestStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.secondName = data.secondName;
        this.firstName = data.firstName;
    }

    public serialize(): RequestStructSerialized {
        return {
            'secondName': this.secondName,
            'firstName': this.firstName
        };
    }

    // Polymorphic section below. If a new type to be registered, use RequestStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: RequestStruct | RequestStructSerialized): Request}} = {
        [RequestStruct.FullClassName]: RequestStruct
    };

    public static register(className: string, ctor: {new (data?: RequestStruct | RequestStructSerialized): Request}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: RequestStructSerialized}): Request {
        const polymorphicId = Object.keys(data)[0];
        const ctor = RequestStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for RequestStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

RequestStruct.register(RequestStruct.FullClassName, RequestStruct);
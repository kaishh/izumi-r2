// Auto-generated, any modifications may be overwritten in the future.

// ErrorData Interface
export interface ErrorData {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): ErrorDataStructSerialized;

    message: string;
}

export interface ErrorDataStructSerialized {
    message: string;
}

export class ErrorDataStruct implements ErrorData {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services.ErrorData';
    public static readonly ClassName = 'ErrorDataStruct';
    public static readonly FullClassName = 'idltest.services.ErrorData.ErrorDataStruct';

    public getPackageName(): string { return ErrorDataStruct.PackageName; }
    public getClassName(): string { return ErrorDataStruct.ClassName; }
    public getFullClassName(): string { return ErrorDataStruct.FullClassName; }

    private _message: string;

    public get message(): string {
        return this._message;
    }

    public set message(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field message is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field message expects type string, got ' + value);
        }

        this._message = value;
    }

    constructor(data: ErrorDataStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.message = data.message;
    }

    public serialize(): ErrorDataStructSerialized {
        return {
            'message': this.message
        };
    }

    // Polymorphic section below. If a new type to be registered, use ErrorDataStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: ErrorDataStruct | ErrorDataStructSerialized): ErrorData}} = {
        [ErrorDataStruct.FullClassName]: ErrorDataStruct
    };

    public static register(className: string, ctor: {new (data?: ErrorDataStruct | ErrorDataStructSerialized): ErrorData}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: ErrorDataStructSerialized}): ErrorData {
        const polymorphicId = Object.keys(data)[0];
        const ctor = ErrorDataStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for ErrorDataStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

ErrorDataStruct.register(ErrorDataStruct.FullClassName, ErrorDataStruct);
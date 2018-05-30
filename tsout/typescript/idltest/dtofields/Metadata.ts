// Auto-generated, any modifications may be overwritten in the future.

// Metadata Interface
export interface Metadata {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): MetadataStructSerialized;

    name: string;
    id: string;
}

export interface MetadataStructSerialized {
    name: string;
    id: string;
}

export class MetadataStruct implements Metadata {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.dtofields.Metadata';
    public static readonly ClassName = 'MetadataStruct';
    public static readonly FullClassName = 'idltest.dtofields.Metadata.MetadataStruct';

    public getPackageName(): string { return MetadataStruct.PackageName; }
    public getClassName(): string { return MetadataStruct.ClassName; }
    public getFullClassName(): string { return MetadataStruct.FullClassName; }

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

    constructor(data: MetadataStructSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.name = data.name;
        this.id = data.id;
    }

    public serialize(): MetadataStructSerialized {
        return {
            'name': this.name,
            'id': this.id
        };
    }

    // Polymorphic section below. If a new type to be registered, use MetadataStruct.register method
    // which will add it to the known list. You can also overwrite the existing registrations
    // in order to provide extended functionality on existing models, preserving the original class name.

    private static _knownPolymorphic: {[key: string]: {new (data?: MetadataStruct | MetadataStructSerialized): Metadata}} = {
        [MetadataStruct.FullClassName]: MetadataStruct
    };

    public static register(className: string, ctor: {new (data?: MetadataStruct | MetadataStructSerialized): Metadata}): void {
        this._knownPolymorphic[className] = ctor;
    }

    public static create(data: {[key: string]: MetadataStructSerialized}): Metadata {
        const polymorphicId = Object.keys(data)[0];
        const ctor = MetadataStruct._knownPolymorphic[polymorphicId];
        if (!ctor) {
          throw new Error('Unknown polymorphic type ' + polymorphicId + ' for MetadataStruct.Create');
        }

        return new ctor(data[polymorphicId]);
    }
}

MetadataStruct.register(MetadataStruct.FullClassName, MetadataStruct);
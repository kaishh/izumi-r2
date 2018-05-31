// Auto-generated, any modifications may be overwritten in the future.

// UserId Identifier
export class UserId implements IUserId {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.identifiers';
    public static readonly ClassName = 'UserId';
    public static readonly FullClassName = 'idltest.identifiers.UserId';

    public getPackageName(): string { return UserId.PackageName; }
    public getClassName(): string { return UserId.ClassName; }
    public getFullClassName(): string { return UserId.FullClassName; }

    private _value: string;
    private _company: string;

    public get value(): string {
        return this._value;
    }

    public set value(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field value is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field value expects type string, got ' + value);
        }

        if (!value.match('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$')) {
            throw new Error('Field value expects guid format, got ' + value);
        }

        this._value = value;
    }

    public get company(): string {
        return this._company;
    }

    public set company(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field company is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field company expects type string, got ' + value);
        }

        if (!value.match('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$')) {
            throw new Error('Field company expects guid format, got ' + value);
        }

        this._company = value;
    }

    constructor(data: string | IUserId = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        if (typeof data === 'string') {
            if (!data.startsWith('UserId#')) {
                throw new Error('Identifier must start with UserId, got ' + data);
            }
            const parts = data.substr(data.indexOf('#') + 1).split(':');
            this.company = decodeURIComponent(parts[0]);
            this.value = decodeURIComponent(parts[1]);
        } else {
            this.value = data.value;
            this.company = data.company;
        }
    }

    public toString(): string {
        const suffix = encodeURIComponent(this.company.toString()) + ':' + encodeURIComponent(this.value.toString());
        return 'UserId#' + suffix;
    }

    public serialize(): string {
        return this.toString();
    }
}

export interface IUserId {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): string;

    value: string;
    company: string;
}
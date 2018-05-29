// Auto-generated, any modifications may be overwritten in the future.

// BucketID Identifier
export class BucketID implements IBucketID {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.identifiers';
    public static readonly ClassName = 'BucketID';
    public static readonly FullClassName = 'idltest.identifiers.BucketID';

    public getPackageName(): string { return BucketID.PackageName; }
    public getClassName(): string { return BucketID.ClassName; }
    public getFullClassName(): string { return BucketID.FullClassName; }

    private _app: string;
    private _user: string;
    private _bucket: string;

    public get app(): string {
        return this._app;
    }

    public set app(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field app is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field app expects type string, got ' + value);
        }

        if (!value.match('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$')) {
            throw new Error('Field app expects guid format, got ' + value);
        }

        this._app = value;
    }

    public get user(): string {
        return this._user;
    }

    public set user(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field user is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field user expects type string, got ' + value);
        }

        if (!value.match('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$')) {
            throw new Error('Field user expects guid format, got ' + value);
        }

        this._user = value;
    }

    public get bucket(): string {
        return this._bucket;
    }

    public set bucket(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field bucket is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field bucket expects type string, got ' + value);
        }

        this._bucket = value;
    }

    constructor(data: string | IBucketID = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        if (typeof data === 'string') {
            if (!data.startsWith('BucketID#')) {
                throw new Error('Identifier must start with BucketID, got ' + data);
            }
            const parts = data.substr(data.indexOf('#') + 1).split(':');
            this.app = decodeURIComponent(parts[0]);
            this.bucket = decodeURIComponent(parts[1]);
            this.user = decodeURIComponent(parts[2]);
        } else {
            this.app = data.app;
            this.user = data.user;
            this.bucket = data.bucket;
        }
    }

    public toString(): string {
        const suffix = encodeURIComponent(this.app.toString()) + ':' + encodeURIComponent(this.bucket.toString()) + ':' + encodeURIComponent(this.user.toString());
        return 'BucketID#' + suffix;
    }

    public serialize(): string {
        return this.toString();
    }
}

export interface IBucketID {
    getPackageName(): string;
    getClassName(): string;
    getFullClassName(): string;
    serialize(): string;

    app: string;
    user: string;
    bucket: string;
}
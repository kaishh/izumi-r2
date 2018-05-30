// Auto-generated, any modifications may be overwritten in the future.
import { SuccessData, SuccessDataStruct, SuccessDataStructSerialized } from './SuccessData';
import { ErrorData, ErrorDataStruct, ErrorDataStructSerialized } from './ErrorData';
import {
    IRTServiceClientInData,
    IRTServiceClientOutData,
    IRTClientTransport
} from '../../irt'

// TestService client
class InParameterless implements IRTServiceClientInData {
    constructor(data: InParameterlessSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): InParameterlessSerialized {
        return {
        };
    }
}

interface InParameterlessSerialized {
}

class InSimpleMethod implements IRTServiceClientInData {
    private _a: string;
    public get a(): string {
        return this._a;
    }

    public set a(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field a is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field a expects type string, got ' + value);
        }

        this._a = value;
    }

    constructor(data: InSimpleMethodSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.a = data.a;
    }

    public serialize(): InSimpleMethodSerialized {
        return {
            'a': this.a
        };
    }
}

interface InSimpleMethodSerialized {
    a: string;
}

class InSimpleMethodWithGenerics implements IRTServiceClientInData {
    private _a: string[];
    public get a(): string[] {
        return this._a;
    }

    public set a(value: string[]) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field a is not optional');
        }
        this._a = value;
    }

    constructor(data: InSimpleMethodWithGenericsSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.a = data.a.slice();
    }

    public serialize(): InSimpleMethodWithGenericsSerialized {
        return {
            'a': this.a.slice()
        };
    }
}

interface InSimpleMethodWithGenericsSerialized {
    a: string[];
}

class InSimple implements IRTServiceClientInData {
    constructor(data: InSimpleSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): InSimpleSerialized {
        return {
        };
    }
}

interface InSimpleSerialized {
}

class OutSimple implements IRTServiceClientOutData {
    constructor(data: OutSimpleSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

    }

    public serialize(): OutSimpleSerialized {
        return {
        };
    }
}

interface OutSimpleSerialized {
}

class InGreetSingularOut implements IRTServiceClientInData {
    private _firstName: string;
    private _secondName: string;
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

    constructor(data: InGreetSingularOutSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.firstName = data.firstName;
        this.secondName = data.secondName;
    }

    public serialize(): InGreetSingularOutSerialized {
        return {
            'firstName': this.firstName,
            'secondName': this.secondName
        };
    }
}

interface InGreetSingularOutSerialized {
    firstName: string;
    secondName: string;
}

class InGreetImplicitStructOut implements IRTServiceClientInData {
    private _firstName: string;
    private _secondName: string;
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

    constructor(data: InGreetImplicitStructOutSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.firstName = data.firstName;
        this.secondName = data.secondName;
    }

    public serialize(): InGreetImplicitStructOutSerialized {
        return {
            'firstName': this.firstName,
            'secondName': this.secondName
        };
    }
}

interface InGreetImplicitStructOutSerialized {
    firstName: string;
    secondName: string;
}

class OutGreetImplicitStructOut implements IRTServiceClientOutData {
    private _a: string;
    public get a(): string {
        return this._a;
    }

    public set a(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field a is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field a expects type string, got ' + value);
        }

        this._a = value;
    }

    constructor(data: OutGreetImplicitStructOutSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.a = data.a;
    }

    public serialize(): OutGreetImplicitStructOutSerialized {
        return {
            'a': this.a
        };
    }
}

interface OutGreetImplicitStructOutSerialized {
    a: string;
}

class InGreetImplicitStructMultilineSyntax implements IRTServiceClientInData {
    private _region: string;
    private _age: number;
    public get region(): string {
        return this._region;
    }

    public set region(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field region is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field region expects type string, got ' + value);
        }

        this._region = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field age is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field age expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field age is expected to be an integer, got ' + value);
        }

        if (value < -128) {
            throw new Error('Field age is expected to be not less than -128, got ' + value);
        }

        if (value > 127) {
            throw new Error('Field age is expected to be not greater than 127, got ' + value);
        }

        this._age = value;
    }

    constructor(data: InGreetImplicitStructMultilineSyntaxSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.region = data.region;
        this.age = data.age;
    }

    public serialize(): InGreetImplicitStructMultilineSyntaxSerialized {
        return {
            'region': this.region,
            'age': this.age
        };
    }
}

interface InGreetImplicitStructMultilineSyntaxSerialized {
    region: string;
    age: number;
}

class OutGreetImplicitStructMultilineSyntax implements IRTServiceClientOutData {
    private _bullshit: string;
    public get bullshit(): string {
        return this._bullshit;
    }

    public set bullshit(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field bullshit is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field bullshit expects type string, got ' + value);
        }

        this._bullshit = value;
    }

    constructor(data: OutGreetImplicitStructMultilineSyntaxSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.bullshit = data.bullshit;
    }

    public serialize(): OutGreetImplicitStructMultilineSyntaxSerialized {
        return {
            'bullshit': this.bullshit
        };
    }
}

interface OutGreetImplicitStructMultilineSyntaxSerialized {
    bullshit: string;
}

class InGreetImplicitStructureMultilineCurlyBracesSyntax implements IRTServiceClientInData {
    private _region: string;
    private _age: number;
    public get region(): string {
        return this._region;
    }

    public set region(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field region is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field region expects type string, got ' + value);
        }

        this._region = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field age is not optional');
        }

        if (typeof value !== 'number') {
            throw new Error('Field age expects type number, got ' + value);
        }

        if (value % 1 !== 0) {
            throw new Error('Field age is expected to be an integer, got ' + value);
        }

        if (value < -128) {
            throw new Error('Field age is expected to be not less than -128, got ' + value);
        }

        if (value > 127) {
            throw new Error('Field age is expected to be not greater than 127, got ' + value);
        }

        this._age = value;
    }

    constructor(data: InGreetImplicitStructureMultilineCurlyBracesSyntaxSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.region = data.region;
        this.age = data.age;
    }

    public serialize(): InGreetImplicitStructureMultilineCurlyBracesSyntaxSerialized {
        return {
            'region': this.region,
            'age': this.age
        };
    }
}

interface InGreetImplicitStructureMultilineCurlyBracesSyntaxSerialized {
    region: string;
    age: number;
}

class OutGreetImplicitStructureMultilineCurlyBracesSyntax implements IRTServiceClientOutData {
    private _bullshit: string;
    public get bullshit(): string {
        return this._bullshit;
    }

    public set bullshit(value: string) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field bullshit is not optional');
        }

        if (typeof value !== 'string') {
            throw new Error('Field bullshit expects type string, got ' + value);
        }

        this._bullshit = value;
    }

    constructor(data: OutGreetImplicitStructureMultilineCurlyBracesSyntaxSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.bullshit = data.bullshit;
    }

    public serialize(): OutGreetImplicitStructureMultilineCurlyBracesSyntaxSerialized {
        return {
            'bullshit': this.bullshit
        };
    }
}

interface OutGreetImplicitStructureMultilineCurlyBracesSyntaxSerialized {
    bullshit: string;
}

class InGreetAlgebraicOut implements IRTServiceClientInData {
    private _firstName: string;
    private _secondName: string;
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

    constructor(data: InGreetAlgebraicOutSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.firstName = data.firstName;
        this.secondName = data.secondName;
    }

    public serialize(): InGreetAlgebraicOutSerialized {
        return {
            'firstName': this.firstName,
            'secondName': this.secondName
        };
    }
}

interface InGreetAlgebraicOutSerialized {
    firstName: string;
    secondName: string;
}

class InGreetAlgebraicMultilineSyntax implements IRTServiceClientInData {
    private _firstName: string;
    private _secondName: string;
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

    constructor(data: InGreetAlgebraicMultilineSyntaxSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.firstName = data.firstName;
        this.secondName = data.secondName;
    }

    public serialize(): InGreetAlgebraicMultilineSyntaxSerialized {
        return {
            'firstName': this.firstName,
            'secondName': this.secondName
        };
    }
}

interface InGreetAlgebraicMultilineSyntaxSerialized {
    firstName: string;
    secondName: string;
}

class InGreetAlgebraicMultilineCurlyBracesSyntax implements IRTServiceClientInData {
    private _firstName: string;
    private _secondName: string;
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

    constructor(data: InGreetAlgebraicMultilineCurlyBracesSyntaxSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.firstName = data.firstName;
        this.secondName = data.secondName;
    }

    public serialize(): InGreetAlgebraicMultilineCurlyBracesSyntaxSerialized {
        return {
            'firstName': this.firstName,
            'secondName': this.secondName
        };
    }
}

interface InGreetAlgebraicMultilineCurlyBracesSyntaxSerialized {
    firstName: string;
    secondName: string;
}

export interface ITestServiceClient {
    parameterless(): Promise<string>
    simpleMethod(a: string): Promise<string>
    simpleMethodWithGenerics(a: string[]): Promise<string[]>
    simple(): Promise<OutSimple>
    greetSingularOut(firstName: string, secondName: string): Promise<string>
    greetImplicitStructOut(firstName: string, secondName: string): Promise<OutGreetImplicitStructOut>
    greetImplicitStructMultilineSyntax(region: string, age: number): Promise<OutGreetImplicitStructMultilineSyntax>
    greetImplicitStructureMultilineCurlyBracesSyntax(region: string, age: number): Promise<OutGreetImplicitStructureMultilineCurlyBracesSyntax>
    greetAlgebraicOut(firstName: string, secondName: string): Promise<SuccessData | ErrorData>
    greetAlgebraicMultilineSyntax(firstName: string, secondName: string): Promise<SuccessData | ErrorData>
    greetAlgebraicMultilineCurlyBracesSyntax(firstName: string, secondName: string): Promise<SuccessData | ErrorData>
}

export class TestServiceClient implements ITestServiceClient {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.services';
    public static readonly ClassName = 'TestService';
    public static readonly FullClassName = 'idltest.services.TestService';

    public getPackageName(): string { return TestServiceClient.PackageName; }
    public getClassName(): string { return TestServiceClient.ClassName; }
    public getFullClassName(): string { return TestServiceClient.FullClassName; }

    protected _transport: IRTClientTransport;

    constructor(transport: IRTClientTransport) {
        this._transport = transport;
    }

    private send<I extends IRTServiceClientInData, O extends IRTServiceClientOutData>(method: string, data: I, inputType: {new(): I}, outputType: {new(data: any): O} ): Promise<O> {
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, method, data)
                .then(data => {
                    try {
                        const output = new outputType(data);
                        resolve(output);
                    }
                    catch (err) {
                        this._transport.log(err);
                        reject(err);
                    }
                })
                .catch( err => {
                    this._transport.log(err);
                    reject(err);
                });
            });
    }
    public parameterless(): Promise<string> {
        const __data = new InParameterless();

        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'parameterless', __data)
                .then(data => {
                    try {
                        const output = data;
                        resolve(output);
                    }
                    catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
            });
    }

    public simpleMethod(a: string): Promise<string> {
        const __data = new InSimpleMethod();
        __data.a = a;
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'simpleMethod', __data)
                .then(data => {
                    try {
                        const output = data;
                        resolve(output);
                    }
                    catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
            });
    }

    public simpleMethodWithGenerics(a: string[]): Promise<string[]> {
        const __data = new InSimpleMethodWithGenerics();
        __data.a = a;
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'simpleMethodWithGenerics', __data)
                .then(data => {
                    try {
                        const output = data.slice();
                        resolve(output);
                    }
                    catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
            });
    }

    public simple(): Promise<OutSimple> {
        const __data = new InSimple();

        return this.send('simple', __data, InSimple, OutSimple);
    }

    public greetSingularOut(firstName: string, secondName: string): Promise<string> {
        const __data = new InGreetSingularOut();
        __data.firstName = firstName;
        __data.secondName = secondName;
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'greetSingularOut', __data)
                .then(data => {
                    try {
                        const output = data;
                        resolve(output);
                    }
                    catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
            });
    }

    public greetImplicitStructOut(firstName: string, secondName: string): Promise<OutGreetImplicitStructOut> {
        const __data = new InGreetImplicitStructOut();
        __data.firstName = firstName;
        __data.secondName = secondName;
        return this.send('greetImplicitStructOut', __data, InGreetImplicitStructOut, OutGreetImplicitStructOut);
    }

    public greetImplicitStructMultilineSyntax(region: string, age: number): Promise<OutGreetImplicitStructMultilineSyntax> {
        const __data = new InGreetImplicitStructMultilineSyntax();
        __data.region = region;
        __data.age = age;
        return this.send('greetImplicitStructMultilineSyntax', __data, InGreetImplicitStructMultilineSyntax, OutGreetImplicitStructMultilineSyntax);
    }

    public greetImplicitStructureMultilineCurlyBracesSyntax(region: string, age: number): Promise<OutGreetImplicitStructureMultilineCurlyBracesSyntax> {
        const __data = new InGreetImplicitStructureMultilineCurlyBracesSyntax();
        __data.region = region;
        __data.age = age;
        return this.send('greetImplicitStructureMultilineCurlyBracesSyntax', __data, InGreetImplicitStructureMultilineCurlyBracesSyntax, OutGreetImplicitStructureMultilineCurlyBracesSyntax);
    }

    public greetAlgebraicOut(firstName: string, secondName: string): Promise<SuccessData | ErrorData> {
        const __data = new InGreetAlgebraicOut();
        __data.firstName = firstName;
        __data.secondName = secondName;
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'greetAlgebraicOut', __data)
                .then(data => {
                    try {
                        const id = Object.keys(data)[0];
                        const content = data[id];
                        switch (id) {
                            case 'SuccessData': resolve(SuccessDataStruct.create(content as any)); break;
                            case 'ErrorData': resolve(ErrorDataStruct.create(content as any)); break;
                            default:
                                throw new Error('Unknown type id ' + id + ' for greetAlgebraicOut output.');
                        }
                    } catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                 })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
        });
    }

    public greetAlgebraicMultilineSyntax(firstName: string, secondName: string): Promise<SuccessData | ErrorData> {
        const __data = new InGreetAlgebraicMultilineSyntax();
        __data.firstName = firstName;
        __data.secondName = secondName;
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'greetAlgebraicMultilineSyntax', __data)
                .then(data => {
                    try {
                        const id = Object.keys(data)[0];
                        const content = data[id];
                        switch (id) {
                            case 'SuccessData': resolve(SuccessDataStruct.create(content as any)); break;
                            case 'ErrorData': resolve(ErrorDataStruct.create(content as any)); break;
                            default:
                                throw new Error('Unknown type id ' + id + ' for greetAlgebraicMultilineSyntax output.');
                        }
                    } catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                 })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
        });
    }

    public greetAlgebraicMultilineCurlyBracesSyntax(firstName: string, secondName: string): Promise<SuccessData | ErrorData> {
        const __data = new InGreetAlgebraicMultilineCurlyBracesSyntax();
        __data.firstName = firstName;
        __data.secondName = secondName;
        return new Promise((resolve, reject) => {
            this._transport.send(TestServiceClient.ClassName, 'greetAlgebraicMultilineCurlyBracesSyntax', __data)
                .then(data => {
                    try {
                        const id = Object.keys(data)[0];
                        const content = data[id];
                        switch (id) {
                            case 'SuccessData': resolve(SuccessDataStruct.create(content as any)); break;
                            case 'ErrorData': resolve(ErrorDataStruct.create(content as any)); break;
                            default:
                                throw new Error('Unknown type id ' + id + ' for greetAlgebraicMultilineCurlyBracesSyntax output.');
                        }
                    } catch(err) {
                        this._transport.log(err);
                        reject(err);
                    }
                 })
                .catch(err => {
                    this._transport.log(err);
                    reject(err);
                });
        });
    }
}
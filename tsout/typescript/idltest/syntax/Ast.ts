// Auto-generated, any modifications may be overwritten in the future.
import { TestOneliners, TestOnelinersSerialized } from './TestOneliners';
import { TestDto, TestDtoSerialized } from './TestDto';
import { TestMixin, Struct, StructSerialized } from './TestMixin';

// Ast Algebraic Data Type
export type Ast = TestMixin | TestDto | TestOneliners;

export class AstHelpers {
    public static serialize(adt: Ast): {[key: string]: StructSerialized | TestDtoSerialized | TestOnelinersSerialized} {
        const className = adt.getClassName();

        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: StructSerialized | TestDtoSerialized | TestOnelinersSerialized}): Ast {
        const id = Object.keys(data)[0];
        const content = data[id];
        switch (id) {
            case 'TestMixin': return TestMixinStruct.create(content as any);
            case 'TestDto': return new TestDto(content as any);
            case 'TestOneliners': return new TestOneliners(content as any);
            default:
                throw new Error('Unknown type id ' + id + ' for Ast');
        }
    }
}
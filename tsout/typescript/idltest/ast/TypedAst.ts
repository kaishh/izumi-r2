// Auto-generated, any modifications may be overwritten in the future.
import { TSymNode, Struct, StructSerialized } from './TSymNode';
import { TFloatNode, Struct, StructSerialized } from './TFloatNode';
import { TAppNode, Struct, StructSerialized } from './TAppNode';
import { TBoolNode, Struct, StructSerialized } from './TBoolNode';
import { TIntNode, Struct, StructSerialized } from './TIntNode';
import { TLamNode, Struct, StructSerialized } from './TLamNode';
import { TIfNode, Struct, StructSerialized } from './TIfNode';

// TypedAst Algebraic Data Type
export type TypedAst = TIntNode | TFloatNode | TBoolNode | TSymNode | TAppNode | TLamNode | TIfNode;

export class TypedAstHelpers {
    public static serialize(adt: TypedAst): {[key: string]: StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized} {
        const className = adt.getClassName();

        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized}): TypedAst {
        const id = Object.keys(data)[0];
        const content = data[id];
        switch (id) {
            case 'TIntNode': return TIntNodeStruct.create(content as any);
            case 'TFloatNode': return TFloatNodeStruct.create(content as any);
            case 'TBoolNode': return TBoolNodeStruct.create(content as any);
            case 'TSymNode': return TSymNodeStruct.create(content as any);
            case 'TAppNode': return TAppNodeStruct.create(content as any);
            case 'TLamNode': return TLamNodeStruct.create(content as any);
            case 'TIfNode': return TIfNodeStruct.create(content as any);
            default:
                throw new Error('Unknown type id ' + id + ' for TypedAst');
        }
    }
}
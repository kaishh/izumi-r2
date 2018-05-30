// Auto-generated, any modifications may be overwritten in the future.
import { TSymNode, TSymNodeStruct, TSymNodeStructSerialized } from './TSymNode';
import { TFloatNode, TFloatNodeStruct, TFloatNodeStructSerialized } from './TFloatNode';
import { TAppNode, TAppNodeStruct, TAppNodeStructSerialized } from './TAppNode';
import { TBoolNode, TBoolNodeStruct, TBoolNodeStructSerialized } from './TBoolNode';
import { TIntNode, TIntNodeStruct, TIntNodeStructSerialized } from './TIntNode';
import { TLamNode, TLamNodeStruct, TLamNodeStructSerialized } from './TLamNode';
import { TIfNode, TIfNodeStruct, TIfNodeStructSerialized } from './TIfNode';

// TypedAst Algebraic Data Type
export type TypedAst = TIntNode | TFloatNode | TBoolNode | TSymNode | TAppNode | TLamNode | TIfNode;

export class TypedAstHelpers {
    public static serialize(adt: TypedAst): {[key: string]: TIntNodeStructSerialized | TFloatNodeStructSerialized | TBoolNodeStructSerialized | TSymNodeStructSerialized | TAppNodeStructSerialized | TLamNodeStructSerialized | TIfNodeStructSerialized} {
        const className = adt.getClassName();

        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: TIntNodeStructSerialized | TFloatNodeStructSerialized | TBoolNodeStructSerialized | TSymNodeStructSerialized | TAppNodeStructSerialized | TLamNodeStructSerialized | TIfNodeStructSerialized}): TypedAst {
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
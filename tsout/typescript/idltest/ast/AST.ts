// Auto-generated, any modifications may be overwritten in the future.
import { IntNode, Struct, StructSerialized } from './IntNode';
import { IfNode, Struct, StructSerialized } from './IfNode';
import { FloatNode, Struct, StructSerialized } from './FloatNode';
import { AppNode, Struct, StructSerialized } from './AppNode';
import { LamNode, Struct, StructSerialized } from './LamNode';
import { BoolNode, Struct, StructSerialized } from './BoolNode';
import { SymNode, Struct, StructSerialized } from './SymNode';

// AST Algebraic Data Type
export type AST = IntNode | FloatNode | BoolNode | SymNode | AppNode | LamNode | IfNode;

export class ASTHelpers {
    public static serialize(adt: AST): {[key: string]: StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized} {
        const className = adt.getClassName();

        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized | StructSerialized}): AST {
        const id = Object.keys(data)[0];
        const content = data[id];
        switch (id) {
            case 'IntNode': return IntNodeStruct.create(content as any);
            case 'FloatNode': return FloatNodeStruct.create(content as any);
            case 'BoolNode': return BoolNodeStruct.create(content as any);
            case 'SymNode': return SymNodeStruct.create(content as any);
            case 'AppNode': return AppNodeStruct.create(content as any);
            case 'LamNode': return LamNodeStruct.create(content as any);
            case 'IfNode': return IfNodeStruct.create(content as any);
            default:
                throw new Error('Unknown type id ' + id + ' for AST');
        }
    }
}
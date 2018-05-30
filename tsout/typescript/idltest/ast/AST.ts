// Auto-generated, any modifications may be overwritten in the future.
import { IntNode, IntNodeStruct, IntNodeStructSerialized } from './IntNode';
import { IfNode, IfNodeStruct, IfNodeStructSerialized } from './IfNode';
import { FloatNode, FloatNodeStruct, FloatNodeStructSerialized } from './FloatNode';
import { AppNode, AppNodeStruct, AppNodeStructSerialized } from './AppNode';
import { LamNode, LamNodeStruct, LamNodeStructSerialized } from './LamNode';
import { BoolNode, BoolNodeStruct, BoolNodeStructSerialized } from './BoolNode';
import { SymNode, SymNodeStruct, SymNodeStructSerialized } from './SymNode';

// AST Algebraic Data Type
export type AST = IntNode | FloatNode | BoolNode | SymNode | AppNode | LamNode | IfNode;

export class ASTHelpers {
    public static serialize(adt: AST): {[key: string]: IntNodeStructSerialized | FloatNodeStructSerialized | BoolNodeStructSerialized | SymNodeStructSerialized | AppNodeStructSerialized | LamNodeStructSerialized | IfNodeStructSerialized} {
        const className = adt.getClassName();

        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: IntNodeStructSerialized | FloatNodeStructSerialized | BoolNodeStructSerialized | SymNodeStructSerialized | AppNodeStructSerialized | LamNodeStructSerialized | IfNodeStructSerialized}): AST {
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
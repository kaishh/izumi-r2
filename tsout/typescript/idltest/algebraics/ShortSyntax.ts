// Auto-generated, any modifications may be overwritten in the future.
import { Success, SuccessSerialized } from './Success';
import { Failure, FailureSerialized } from './Failure';

// ShortSyntax Algebraic Data Type
export type ShortSyntax = Success | Failure;

export class ShortSyntaxHelpers {
    public static serialize(adt: ShortSyntax): {[key: string]: SuccessSerialized | FailureSerialized} {
        const className = adt.getClassName();
        if (className == 'Success') {
            className = 'TestSuccess'
        }
        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: SuccessSerialized | FailureSerialized}): ShortSyntax {
        const id = Object.keys(data)[0];
        const content = data[id];
        switch (id) {
            case 'TestSuccess': return new Success(content as any);
            case 'Failure': return new Failure(content as any);
            default:
                throw new Error('Unknown type id ' + id + ' for ShortSyntax');
        }
    }
}
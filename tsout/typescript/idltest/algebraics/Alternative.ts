// Auto-generated, any modifications may be overwritten in the future.
import { Success, SuccessSerialized } from './Success';
import { Failure, FailureSerialized } from './Failure';

// Alternative Algebraic Data Type
export type Alternative = Success | Failure;

export class AlternativeHelpers {
    public static serialize(adt: Alternative): {[key: string]: SuccessSerialized | FailureSerialized} {
        const className = adt.getClassName();
        if (className == 'Success') {
            className = 'TestSuccess'
        }
        return {
            [className]: adt.serialize()
        };
    }

    public static deserialize(data: {[key: string]: SuccessSerialized | FailureSerialized}): Alternative {
        const id = Object.keys(data)[0];
        const content = data[id];
        switch (id) {
            case 'TestSuccess': return new Success(content as any);
            case 'Failure': return new Failure(content as any);
            default:
                throw new Error('Unknown type id ' + id + ' for Alternative');
        }
    }
}
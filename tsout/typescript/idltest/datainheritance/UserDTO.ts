// Auto-generated, any modifications may be overwritten in the future.
import { ParameterDTO, ParameterDTOSerialized } from './ParameterDTO';

// UserDTO DTO
export class UserDTO  {
    // Runtime identification methods
    public static readonly PackageName = 'idltest.datainheritance';
    public static readonly ClassName = 'UserDTO';
    public static readonly FullClassName = 'idltest.datainheritance.UserDTO';

    public getPackageName(): string { return UserDTO.PackageName; }
    public getClassName(): string { return UserDTO.ClassName; }
    public getFullClassName(): string { return UserDTO.FullClassName; }

    private _parameterDTO: ParameterDTO;

    public get parameterDTO(): ParameterDTO {
        return this._parameterDTO;
    }

    public set parameterDTO(value: ParameterDTO) {
        if (typeof value === 'undefined' || value === null) {
            throw new Error('Field parameterDTO is not optional');
        }
        this._parameterDTO = value;
    }

    constructor(data: UserDTOSerialized = undefined) {
        if (typeof data === 'undefined' || data === null) {
            return;
        }

        this.parameterDTO = new ParameterDTO(data.parameterDTO);
    }

    public serialize(): UserDTOSerialized {
        return {
            'parameterDTO': this.parameterDTO.serialize()
        };
    }
}

export interface UserDTOSerialized  {
    parameterDTO: ParameterDTOSerialized;
}
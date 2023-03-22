
import { Entity, type EntityProps } from '@domain/interfaces/entity'

export type userRoles = 'admin' | 'dispatcher'
export type userStatus = 'active' | 'inactive'

export interface userProps extends EntityProps {
  name: string,
  email: string,
  password: string,
  status: userStatus,
  role: userRoles[],
  lastLoginAt?: Date,
  updatedAt: Date,
  createdAt: Date,

}

export class User extends Entity<userProps> {
  get id ():string{
    return this.props.id;
  }
  get name (): string {
    return this.props.name;
  }

  get email (): string {
    return this.props.email;
  }

  get password () : string {
    return this.props.password
  }

  get status (): string {
    return this.props.status;
  }

  get role (): userRoles[] {
    return this.props.role;
  }

  get lastLoginAt (): Date | undefined {
    return this.props.lastLoginAt;
  }

  get updateddAt (): Date {
    return this.props.updatedAt;
  }

  get createdAt (): Date {
    return this.props.createdAt;
  }
}

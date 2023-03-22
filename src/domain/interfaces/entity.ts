export interface EntityProps {
  id: string;
}

export abstract class Entity<T extends EntityProps> {
  protected readonly props: T
  constructor (props: T) {
    this.props = props;
  }

  public get_id (): string {
    return this.props.id;
  }
}

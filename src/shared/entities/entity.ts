import { v4 as uuidv4 } from 'uuid';
export abstract class Entity<Props = any> {
  public id: string;
  public props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this.id = id ?? uuidv4();
  }
}

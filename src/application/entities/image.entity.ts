import { Entity } from 'src/shared/entities/entity';

export type ImageProps = {
  imageName: string;
  imageSize: number;
  imageExtent: string;
  imageStoredName: string;
  createdAt?: Date;
};
export class ImageEntity extends Entity<ImageProps> {
  set imageName(value: string) {
    this.props.imageName = value;
  }

  get imageName(): string {
    return this.props.imageName;
  }

  set imageSize(value: number) {
    this.props.imageSize = value;
  }

  get imageSize(): number {
    return this.props.imageSize;
  }

  set imageExtent(value: string) {
    this.props.imageExtent = value;
  }

  get imageExtent(): string {
    return this.props.imageExtent;
  }

  set imageStoredName(value: string) {
    this.props.imageStoredName = value;
  }

  get imageStoredName(): string {
    return this.props.imageStoredName;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}

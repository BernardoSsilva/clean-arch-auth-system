import { Images as PrismaImage } from '@prisma/client';
import * as fs from 'fs';
export function toB64Image(image: PrismaImage) {
    const b64file = fs.readFileSync(`uploads/${image.imageStoredName}`, {encoding: 'base64'});
  return { ...image, b64file };
}

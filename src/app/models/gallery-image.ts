
import { JCD_PROJECT_ENUM } from '../constants/gallery-constants'

export class GalleryImage {
  constructor(
    public galleryKey: JCD_PROJECT_ENUM,
    public uri: string,
  ) {}
}

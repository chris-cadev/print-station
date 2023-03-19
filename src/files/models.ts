type Orientation = 'portrait' | 'landscape' | 'square';
type FileType = 'image' | 'document';

export interface Printable {
    name: string;
    size: number;
    extension: string;
    type: FileType;
    path: string;
    pages: number;
    orientation: Orientation;
}
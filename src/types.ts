export interface PicturesType {
    '320wx320h': string;
    '640wx640h': string;
    extra_large: string;
    large: string;
    medium: string;
    medium_mobile: string;
    small: string;
    thumbnail: string;
}

export interface UserType {
    key: string;
    name: string;
    pictures: PicturesType;
    url: string;
    username: string;
}

export interface Profile {
    id: string;
    name: string;
    imageURL: string;
    userId: string;
    games?: string;
    favoritos?: string;
}

export interface ProfileEdit {
    name: string;
    imageURL: string;
}
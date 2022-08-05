export interface Profile {
    id: string;
    name: string;
    imageURL: string;
    userId: string;
    gameId?: string;
    favoritos?: string;
}

export interface ProfileEdit {
    name: string;
    imageURL: string;
}
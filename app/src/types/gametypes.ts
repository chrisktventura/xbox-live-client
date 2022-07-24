export interface Game {
    id: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year?: string;
    imdbScore?: number;
    urlTrailerYT?: string;
    urlGameplayYT?: string;
    genreName: string;
}
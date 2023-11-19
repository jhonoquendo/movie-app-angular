export interface TheMovie {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult?:             boolean;
    backdrop_path?:     string;
    genre_ids:         number[];
    id?:                number;
    original_language?: OriginalLanguage;
    original_title?:    string;
    overview:          string;
    popularity?:        number;
    poster_path:       string;
    release_date?:      Date;
    title:             string;
    video?:             boolean;
    vote_average:      number;
    vote_count?:        number;
    genre_names:       string[];
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ja = "ja",
}

export type RootStackParams = {
    Home: undefined;
    MovieDetail: Result;
}

export interface Genres {
    genres: Genre[];
}

export interface Genre {
    id:   number;
    name: string;
}

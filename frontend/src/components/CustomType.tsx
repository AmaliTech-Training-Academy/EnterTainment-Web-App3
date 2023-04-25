export interface dataType {
    title: string;
    thumbnail: {
        trending: {
            small: string;
            large: string;
        };
        regular: {
            small: string;
            medium: string;
            large: string;
        };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
};

export interface searchType {
    search: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    word: string;
}

export interface trendingCardDataType {
    key: number;
    title: string;
    year: number
    category: string;
    rating: string;
    image: string;
    isBookmarked: boolean;

}
export type search = {searchType:string, searchValue:string, setSearch:(search:string)=>void}

export type movie =  {
    title: string,
    thumbnail: {
        regular: {
            small: string;
            medium: string;
            large: string;
        }
    },
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
}

export type data = [movie]

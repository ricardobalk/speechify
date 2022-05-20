import { useSharedState } from "../global/store";
import { SearchResult } from "./SearchResult";

const SearchResults = () => {
    return (<div className="w-full">
        <SearchResult artist="John Legend" song="All of me" url=""  />
        <SearchResult artist="Michael Jackson" song="Thriller" url=""  />
    </div>)
}
export default SearchResults;

import styles from '@/styles/SearchBox/SearchBox.module.css'
import SearchField from './SearchField';

const SearchBox = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <SearchField props={{searchInputPlaceholderText: "Search by voice or type something"}} />
        </div>
    )
}

export default SearchBox;
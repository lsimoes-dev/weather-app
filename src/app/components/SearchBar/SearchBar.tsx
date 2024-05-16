import { useState, ChangeEvent, FormEvent } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import { SearchFormat } from "../../types/Search";
import "../../styles/SearchBar.scss";

const SearchBar = (searchHandler: SearchFormat) => {
    const defaultText = "Search city/region/country/postal code";
    const [searchInput, setSearchInput] = useState<string>("");
    const [error, setError] = useState<{
        title: string;
        message: string;
    } | null>();

    const handleSearchBarInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        if (searchInput.trim().length < 1) {
            setError({
                title: "Error",
                message: "Please enter a valid city/region/country/postal code",
            });
        } else {
            searchHandler.onSearch(searchInput);
        }
    };

    const onCloseError = () => {
        setError(null);
    };

    return (
        <div className='search'>
            <form className='search-form' onSubmit={handleSearch}>
                <input
                    className='search-input'
                    type='text'
                    value={searchInput}
                    placeholder={defaultText}
                    onChange={handleSearchBarInput}
                />
                <button className='search-btn'>Search</button>
            </form>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onClose={onCloseError}
                />
            )}
        </div>
    );
};

export default SearchBar;

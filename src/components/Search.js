function Search({ search, handleOnChange }){

    return(
    <div>
        <input type="text" placeholder="Search..." value={search} onChange={handleOnChange} />
    </div>
    )
}

export default Search;
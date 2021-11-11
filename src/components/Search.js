function Search({ search, handleOnChange }){

    return(
    <div className='flex items-center justify-center'>
        <input className='w-full m-2 p-2 shadow border-b-2 rounded border-blue-500 text-gray-700 leading-tight focus:border-blue-700 placeholder-gray-700 font-bold focus:border-blue-700' type="text" placeholder="Search..." value={search} onChange={handleOnChange} />
    </div>
    )
}

export default Search;
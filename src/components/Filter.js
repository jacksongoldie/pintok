function Filter({ selectedCategory, handleSelect }){
    
    return(
        <div className='flex items-center justify-center'>
            <form className='w-full m-2'>
                <label className='px-2 py-4 text-gray-700 font-bold'>Filter by category: </label>
                <select className='w-full px-4 py-2 shadow border-b-2 rounded border-blue-500 text-md text-gray-700 placeholder-gray-500 leading-tight focus:border-blue-700' id="category" name="category" onChange={handleSelect} value={selectedCategory}>
                    <option value="all">All</option>
                    <option value="low-impact">Low Impact</option>
                    <option value="meditation">Meditation</option>
                    <option value="pilates">Pilates</option>
                    <option value="yoga">Yoga</option>
                    <option value="other">Other</option>
                    </select>
            </form>
        </div>
    )
}

export default Filter;
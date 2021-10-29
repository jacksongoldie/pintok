function Filter({ selectedCategory, handleSelect }){
    
    return(
        <div>
            <form>
            <select id="category" name="category" onChange={handleSelect} value={selectedCategory}>
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
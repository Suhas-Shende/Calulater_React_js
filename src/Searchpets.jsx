const Searchpets =()=>{
    const location="surat"
    return (
        <div className="search-params">
            <h1 style={{color:"red"}}>{location}</h1>
        <label htmlFor="location">Location</label>
        <input name="location" value={location.toUpperCase()} placeholder="location"/>
        <button>submit</button>
        </div>
    )
}
export default Searchpets;
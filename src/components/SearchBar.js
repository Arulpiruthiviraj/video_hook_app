import React, {useState} from 'react';

const SearchBar =(props)=> {
    const [searchTerm, setsearchTerm] = useState('');

   const handleOnChange=(event)=>{
       setsearchTerm(event.target.value);
   };
   const handleSearchSubmit=(event)=>{
       event.preventDefault();
      props.formSubmit(searchTerm)
   };

    return (
            <div className={"search-bar ui segment"}>
                <form className={"ui form"} onSubmit={handleSearchSubmit}>
                    <div className={"field"}>
                        <label>Video Search</label>
                        <input type={"text"} value={searchTerm} onChange={handleOnChange}/>
                    </div>
                </form>
            </div>
        );
    };
export default SearchBar;
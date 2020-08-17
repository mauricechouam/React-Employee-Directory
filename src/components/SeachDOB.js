import React, {useContext } from "react";
// import "../styles/SearchBox.css";
import DataAreContext from "../utils/DataAreContext";

const SearchDOB = () => {
    const context = useContext(DataAreContext);

    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                        DOB
                    </span>
                </div>
                <input type="date" className="from-control" onChange={e => context.handleSearchChange(e)} />
                <input type="date" className="from-control" onChange={e => context.handleSearchChange(e)} />
            </div>
        </div>
    );
};
export default SearchDOB;

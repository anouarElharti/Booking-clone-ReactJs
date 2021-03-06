import {useState} from 'react'
import { useLocation} from "react-router-dom"
import { faBed, faPlane, faCar,faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import {format} from 'date-fns';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';
import './list.css';
import SearchItem from '../../components/searchItem/searchItem'

const Listing = () => {
    const location = useLocation();
    const [destination,setDestination] = useState(location.state.destination);
    const [date,setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options,setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listSearchTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" value={`${destination}`} />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>
                                {`${format(date[0].startDate,'MM/dd/yyyy')} to ${format(date[0].endDate,'MM/dd/yyyy')}`}    
                            </span> 
                            {openDate && (<DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className=""
                            />)}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing;
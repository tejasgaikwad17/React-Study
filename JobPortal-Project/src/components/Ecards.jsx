import { Bookmark } from 'lucide-react';
import React from 'react'

const Ecards = (props) => {

    // console.log(props.CompanyName);
    
    return (
        <div className='parent-card'>
            <div className='child-card'>
                <div className="top">
                    <img src={props.CompanyLogo} alt="Logo" />
                    <button>
                        Save <Bookmark size={16} />
                    </button>
                </div>
                <div className='center'>
                    <h3>{props.CompanyName} <span>{props.PostedTime}</span></h3>
                    <h2>{props.Position} </h2>
                    <div className="tag">
                        <h4>{props.Tag1}</h4>
                        <h4>{props.Tag2}</h4>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <h3>{props.Pay}</h3>
                        <p>{props.Location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>

               
        </div>
    )
}

export default Ecards
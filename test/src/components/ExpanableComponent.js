import React from 'react'
import { Message, Button } from 'semantic-ui-react'

const ExpanableComponent = (data) => {
    return (
        <div className='jumbotron' style={{padding:'30px'}}>
        <Message
              open={true}
              content={data.data.description}
            /> 
            <button className="btn btn-primary"
                onClick={() => data.MessagePopUp(data)}>
                {"For more Details"}
            </button>
        </div>
    )
}
export default ExpanableComponent;
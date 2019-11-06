import React from 'react'
import { Message, Button } from 'semantic-ui-react';

const DetailsView = (props)=>{
    const {data, MessageClosePopUp} = props;
    return (
       <div style={{margin: '15px', padding: '15px'}}>
            <div className='jumbotron' style={{ height: '300px', padding: '35px' }}>
                <h4>{data.title} </h4>
                <img src={data.urlToImage} height="90%" width="40%" style={{float:"left", marginRight: '15px',  background: 'url(loading.gif) 50% no-repeat'}}/>
                <Message>
                    {data.content || "No Details Found"}
                </Message>
            </div>
            <div style={{marginTop:'45px', display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                <a className='btn btn-primary' href={data.url}> Click to vist the page</a>
                <Button className='btn btn-primary' onClick={MessageClosePopUp} > Back to home </Button>
            </div>
        </div>
    )
}
export default DetailsView;
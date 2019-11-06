import React from 'react';
import DataTable from 'react-data-table-component';
import ExpanableComponent from './ExpanableComponent';
import { Message, Popup, Modal } from 'semantic-ui-react'
import DetailsView from './DetailsView';

class Data extends React.PureComponent {
   constructor(props){
       super(props);
       this.state={visible:false,
    data: null};
   }
    columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
        width: '50%',
        fontSize: '20%',
    },{
        name: 'Author',
        selector: 'author',
        sortable: true,
        width: '20%',
    },
     {
        name: 'Published On',
        selector: 'publishedAt',
        sortable: true,
        width: '20%',
        right: true,
    }
    ];
    MessagePopUp = (data) =>{
        this.setState({visible:true, data})
    }
    MessageClosePopUp = (data) =>{
        this.setState({visible:false, data})
    }

    render(){
        const Data= this.props.data;
        return(
            this.state.visible ? 
            <DetailsView data={this.state.data.data} MessageClosePopUp={this.MessageClosePopUp}/> :
            Data &&
        <DataTable
            title="News"
            columns={this.columns}
            data={Data}
            responsive={true}
            highlightOnHover={true}
            pointerOnHover={true}
            striped={true}
            overflowY={true}
            overflowYOffset={true}
            expandableRows={true}
            expandableRowsComponent={<ExpanableComponent MessagePopUp={this.MessagePopUp}/>}
            paginationDefaultPage={true}
            noHeader={false}
        />
        )
    }
}

export default Data;
import * as React from 'react';
import {Link} from 'react-router-dom';

class ListSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listItems: this.props.listItems
        };
    }
handleClick = selectedID => {
    debugger;

    const listItems = this.props.listItems;

    const newItems = listItems.forEach(item => {
        if(item.id === selectedID){
            item.isSelected = true;
        } else {
            item.isSelected = false;
        }
    });
    this.setState({listItems: newItems});
};
render() {
    let listItemsContent = this.props.listItems.map(e => {
        let classList = "list-item" + (e.isSelected ? "list-item-highlighted":"list-item-normal");
    return(
        <li key={e.id} className={classList} onClick={() => {
            this.handleClick(e.id);
        }}>
            <nav><Link to={e.link} className="text-decoration-none fw-bold text-dark">{e.name}</Link></nav>
        </li>
    )
    });
    return <ul className="list-group list-group-flush ">{listItemsContent}</ul>;
};
}
  export default ListSelector;
import { Component } from "react";
import './card-list.css'
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((res) => {
          return(
          <Card monster={res}></Card>
      )})}
    </div>)
          
          
    ;
  }
}
export default CardList;

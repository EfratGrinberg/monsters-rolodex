import './card-list.css'
import Card from "../card/card.component";

const CardList=({monsters})=> (

      <div className='card-list'>
        {monsters.map((res) => {
          return(
          <Card monster={res}></Card>
      )})}
    </div>
)
  
export default CardList;

import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  return (
    <div className="contentContainer">
        <h3 className='contentTitle'>{greeting}</h3>
    </div>
  )
}

export default ItemListContainer
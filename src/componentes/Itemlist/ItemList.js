import Item from "../Item/Item"

const ItemList = ({productsList}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {productsList.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}

export default ItemList
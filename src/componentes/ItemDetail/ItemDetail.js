const ItemDetail = ({name,price,category,description,img}) => {
    return (
        <div className="w-full h-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-2 dark:border-gray-2 flex items-center mx-auto">
            <div className="w-1/2 border-r border-gray-200 h-full flex-justify-center items-center">
                <div className="max-w-sm overflow-hidden w-500 h-500">
                    <img className="object-contain w-full h-full"  src={img} alt={name} />
                </div>
            </div>
            <div className="w-1/2 p-6">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2 justify-between">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${price}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-2 text-sm font-semibold text-gray-700">{category}</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 flex items-center">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
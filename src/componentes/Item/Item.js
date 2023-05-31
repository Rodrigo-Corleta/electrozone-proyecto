import { Link } from 'react-router-dom';

const Item = ({ id, name, price, category, description, img }) => {
  return (
    <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-2 dark:border-gray-2">
      <div className="max-w-sm rounded overflow-hidden w-500 h-500">
        <img className="object-contain w-full h-full" src={img} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{category}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">${price}</span>
        <Link to={`/Item/${id}`} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-full mt-4 flex items-center justify-center">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;

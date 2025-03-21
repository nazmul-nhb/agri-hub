import { Link } from 'react-router';
import { ICrop } from '../types';

interface Props {
  crop: ICrop;
}

const CropCard = ({ crop }: Props) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4 hover:shadow-lg transition-all duration-300">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-32 h-32 object-cover rounded-md"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{crop.name}</h3>
        
        <p className="text-sm text-gray-600">{crop.category}</p>
        
        <Link to={`/crops/${crop.id}`} className="text-primary hover:underline text-sm mt-2 block">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default CropCard;

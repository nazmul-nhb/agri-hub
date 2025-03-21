import toast from 'react-hot-toast';
import { FaComments } from 'react-icons/fa';

const FloatingChatButton = () => {
	const handleClick = () => {
		toast.success('Chat Feature is Coming Soon...');
	};

	return (
		<button
			onClick={handleClick}
			className="fixed bottom-4 md:bottom-8 right-4 md:right-8 cursor-pointer bg-primary shadow-gray-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 active:translate-y-2 border border-gray-700"
		>
			<FaComments size={24} />
		</button>
	);
};

export default FloatingChatButton;

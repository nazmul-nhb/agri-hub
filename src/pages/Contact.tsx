import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

// Validation Schema
const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters!'),
	email: z.string().email('Please enter a valid email address!'),
	message: z.string().min(10, 'Message must be at least 10 characters!'),
});

// Type Definition
type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

	const onSubmit = (data: ContactFormData) => {
		toast.success('Message sent successfully!', { id: 'contact' });
		console.log(data);
		reset();
	};

	return (
		<div className="max-w-lg mx-auto bg-white shadow p-6 rounded">
			<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<input
					type="text"
					{...register('name')}
					placeholder="Your Name"
					className="w-full p-2 border rounded"
				/>
				{errors.name && <p className="text-red-500">{errors.name.message}</p>}

				<input
					type="email"
					{...register('email')}
					placeholder="Your Email"
					className="w-full p-2 border rounded"
				/>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}

				<textarea
					{...register('message')}
					placeholder="Your Message"
					className="w-full p-2 border rounded"
				/>
				{errors.message && <p className="text-red-500">{errors.message.message}</p>}

				<button
					type="submit"
					className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;

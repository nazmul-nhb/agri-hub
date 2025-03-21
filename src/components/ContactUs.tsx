import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import SectionTitle from '../components/SectionTitle';
import SectionWrapper from '../components/SectionWrapper';

// Validation Schema
const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters!'),
	email: z.string().email('Please enter a valid email address!'),
	message: z.string().min(10, 'Message must be at least 10 characters!'),
	expertise: z.string().optional(),
	attachment: z.instanceof(FileList).optional(),
});

// Type Definition
type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

	const onSubmit = (data: ContactFormData) => {
		const promise = new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});

		toast.promise(promise, {
			loading: 'Sending message...',
			success: 'Message sent successfully!',
			error: 'Failed to send message.',
		});

		promise.then(() => {
			console.log(data);
			reset();
		});
	};

	return (
		<SectionWrapper>
			<div className="max-w-lg mx-auto bg-white shadow p-6 rounded">
				<SectionTitle title="Contact Us" />

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					{/* Name Field */}
					<input
						type="text"
						{...register('name')}
						placeholder="Your Name"
						className="w-full p-2 border border-primary outline-0 focus:border-2 transition-all duration-300 rounded"
					/>
					{errors.name && <p className="text-red-500">{errors.name.message}</p>}

					{/* Email Field */}
					<input
						type="email"
						{...register('email')}
						placeholder="Your Email"
						className="w-full p-2 border border-primary outline-0 focus:border-2 transition-all duration-300 rounded"
					/>
					{errors.email && <p className="text-red-500">{errors.email.message}</p>}

					{/* Expertise Area (Optional) */}
					<select
						{...register('expertise')}
						className="w-full p-2 border border-primary outline-0 focus:border-2 transition-all duration-300 rounded"
					>
						<option value="">Select Expertise Area (Optional)</option>
						<option value="crop_disease">Crop Disease Management</option>
						<option value="fertilization">Soil Fertilization</option>
						<option value="irrigation">Irrigation Systems</option>
						<option value="harvesting">Harvesting Techniques</option>
					</select>

					{/* Message Field */}
					<textarea
						rows={6}
						{...register('message')}
						placeholder="Your Message"
						className="w-full p-2 border border-primary outline-0 focus:border-2 transition-all duration-300 rounded"
					/>
					{errors.message && (
						<p className="text-red-500">{errors.message.message}</p>
					)}

					{/* File Upload (Optional) */}
					<input
						type="file"
						{...register('attachment')}
						className="w-full p-2 border border-primary outline-0 focus:border-2 transition-all duration-300 rounded"
					/>
					{errors.attachment && (
						<p className="text-red-500">
							Invalid file format. Only images or documents are allowed.
						</p>
					)}

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-primary text-white px-4 py-2 rounded cursor-pointer"
					>
						Send Message
					</button>
				</form>

				{/* Agricultural Extension Services Contact Information */}
				<div className="mt-8 p-4 bg-gray-100 rounded-lg">
					<h3 className="text-xl font-semibold">
						Agricultural Extension Services Contact
					</h3>
					<p className="text-gray-700">
						For immediate support, you can reach out to the Agricultural
						Extension Services:
					</p>
					<p className="text-gray-700">
						Phone:{' '}
						<a href="tel:+8801623732187" className="text-primary">
							+880 1623 732187
						</a>
					</p>
					<p className="text-gray-700">
						Email:{' '}
						<a href="mailto:extension@agri-hub.com" className="text-primary">
							extension@agri-hub.com
						</a>
					</p>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default ContactUs;

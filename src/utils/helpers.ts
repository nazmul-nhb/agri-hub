import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * * Merges classnames using Tailwind Merge
 * @param inputs Classnames to merge
 * @returns Merged classnames
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

import { useEffect, useRef, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { LuMenu } from 'react-icons/lu';
import { Link, NavLink, useLocation } from 'react-router';
import { navLinks } from '../constants/links';
import { cn } from '../utils/helpers';

const initialScrollState = {
	opacity: 'bg-primary/60 md:px-6 !shadow-none',
	title1: 'text-orange-600',
	title2: 'text-white',
	nav: 'h-20',
	menu: 'top-0 text-white',
	logo: 'size-14',
};

const Navbar = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const [prevWidth, setPrevWidth] = useState(0);
	const sidebarRef = useRef<HTMLDivElement | null>(null);

	const { pathname } = useLocation();

	const [scrollState, setScrollState] = useState(initialScrollState);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as Node;

			if (sidebarRef.current && !sidebarRef.current.contains(target)) {
				setOpenNavbar(false);
			}
		};

		document.addEventListener('mouseup', handleClickOutside);
		return () => document.removeEventListener('mouseup', handleClickOutside);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 12) {
				setScrollState({
					opacity: 'backdrop-blur-sm bg-primary/75 md:px-10',
					title1: 'text-white',
					title2: 'text-orange-600',
					nav: 'h-16 sm:px-8 px-4',
					menu: 'top-0 text-gray-200',
					logo: 'size-12',
				});
			} else {
				setScrollState(initialScrollState);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		setPrevWidth(window.innerWidth);

		const handleResize = () => {
			if (prevWidth !== window.innerWidth) {
				setOpenNavbar(false);
			}

			setPrevWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [prevWidth]);

	return (
		<nav
			className={cn(
				'flex items-center justify-between gap-4 mx-auto shadow-md py-2 px-3 sticky top-0 z-50 h-16 w-full transition-all origin-center duration-500',
				scrollState.nav,
				scrollState.opacity
			)}
		>
			{/* Mobile Menu Button */}
			<div
				className="lg:hidden text-3xl cursor-pointer z-50 fixed"
				onClick={() => setOpenNavbar(!openNavbar)}
			>
				{openNavbar ? (
					<ImCross className="text-orangebg-orange-600 pr-2" size={36} />
				) : (
					<LuMenu className="text-white pr-2" size={36} />
				)}
			</div>

			<Link
				to="/"
				className="flex items-center gap-1 text-2xl md:text-3xl font-semibold md:font-bold ml-8 lg:ml-0"
			>
				{/* Logo */}
				<img
					src="/logo-bw.svg"
					alt="AgriHub"
					className={cn(
						scrollState.logo,
						'transition-all duration-500 origin-center'
					)}
				/>
				<h3 className="flex items-center gap-0.5">
					<span
						className={cn(
							scrollState.title1,
							'transition-all duration-500 origin-center'
						)}
					>
						Agri
					</span>
					<span
						className={cn(
							scrollState.title2,
							'transition-all duration-500 origin-center'
						)}
					>
						Hub
					</span>
				</h3>
			</Link>

			<div
				ref={sidebarRef}
				className={cn(
					'w-2/3 lg:w-full flex-1 flex flex-col lg:flex-row gap-5 lg:gap-8 lg:justify-end absolute lg:static shadow-lg lg:shadow-none h-screen lg:h-auto p-4 lg:p-0 transition-all duration-500 font-semibold text-base',
					scrollState.menu,
					{
						'left-0 backdrop-blur-md bg-primary bg-cover bg-left bg-no-repeat lg:bg-transparent z-50 !text-white':
							openNavbar,
						'-left-full': !openNavbar,
					}
				)}
			>
				{navLinks.map((link) => (
					<NavLink
						onClick={() => setOpenNavbar(false)}
						key={String(link.label)}
						to={link.path}
						className={({ isActive }) =>
							cn(
								'flex items-center gap-1 hover:text-red-100 transition-all duration-500 ease-out group relative',
								{
									'text-orange-600 font-bold': isActive,
								}
							)
						}
					>
						<span
							className={cn(
								'absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600 transform origin-center scale-x-0 transition-all duration-500 ease-out group-hover:scale-x-100',
								{
									'bg-orange-600 scale-x-100': pathname === link.path,
								}
							)}
						></span>
						{link.icon && link.icon}
						<span>{link.label}</span>
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export default Navbar;

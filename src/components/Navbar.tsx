import ToggleMode from './ToggleMode'

const Navbar = () => {
	return (
		<nav className='py-4 sticky top-0 z-30 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-black/80 shadow-sm'>
			<div className='container mx-auto w-11/12 flex justify-between items-center'>
				<div className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					Stadium
				</div>

				<ul className='flex items-center gap-6'>
					<li className='text-[16px] font-medium text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer'>
						Home
					</li>
					{/* Qo‘shimcha sahifalar kerak bo‘lsa, shu yerga qo‘shishingiz mumkin */}
				</ul>

				<div className='flex items-center gap-4'>
					<ToggleMode />
				</div>
			</div>
		</nav>
	)
}

export default Navbar

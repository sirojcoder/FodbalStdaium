import { useState } from 'react'

const Footer = () => {
	const [email, setEmail] = useState('')

	const handleSubmit = () => {
		console.log('Email submitted:', email)
		setEmail('')
	}

	return (
		<div className='bg-gray-100 dark:bg-[#0f0f0f] text-gray-800 dark:text-gray-200'>
			<div className='container w-11/12 mx-auto py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
					{/* Discover */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
							Discover
						</h3>
						<ul className='space-y-2 text-sm'>
							{['Home', 'Terms', 'Talent & culture', 'Destination', 'Sitemap'].map(item => (
								<li key={item}>
									<a href="#" className='hover:text-blue-500 transition'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
							Contact
						</h3>
						<ul className='space-y-2 text-sm'>
							{['Refund policy', 'EMI Policy', 'Privacy Policy'].map(item => (
								<li key={item}>
									<a href="#" className='hover:text-blue-500 transition'>
										{item}
									</a>
								</li>
							))}
						</ul>
						<div className='mt-4 space-y-2 text-sm'>
							<div className='flex items-center gap-2'>
								<span>📧</span>
								<a href='mailto:info@phoenixtravels.com' className='hover:text-blue-500'>
									info@phoenixtravels.com
								</a>
							</div>
							<div className='flex items-center gap-2'>
								<span>📞</span>
								<a href='tel:+13134048290' className='hover:text-blue-500'>
									+1 313 404 8290
								</a>
							</div>
						</div>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
							Enjoy your trip to the fullest
						</h3>
						<p className='text-sm mb-4 text-gray-600 dark:text-gray-300'>
							Sign up and get notified about best deals immediately
						</p>
						<div className='flex flex-col sm:flex-row gap-3'>
							<input
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Your email address'
								className='w-full px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white dark:bg-gray-800 border dark:border-gray-600'
							/>
							<button
								onClick={handleSubmit}
								className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium'
							>
								Sign up
							</button>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400'>
					<div className='mb-2 md:mb-0'>
						Thank you for creating with Phoenix React | 2024 ©{' '}
						<a href='https://themewagon.com' className='hover:text-blue-400'>
							Themewagon
						</a>
					</div>
					<div>v 1.6.0</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

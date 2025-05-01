import { Check, Edit, MapPin, Plus, Trash2, X } from 'lucide-react'
import React, { useState } from 'react'

// Type definition
type Stadium = {
	id: number
	name: string
	location: string
	price: number
	image: string
	indoor: boolean
}

// Default image
const defaultImage =
	'https://asset.kompas.com/crops/8NztBClbysFh3aT5oaF3uMySc94=/0x0:5377x3585/750x500/data/photo/2024/06/27/667cf2100884d.jpg'

// Initial data
const initialStadiums: Stadium[] = [
	{
		id: 1,
		name: 'Football Stadium',
		location: 'Tashkent, Chilanzar',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 2,
		name: 'Football Stadium',
		location: 'Samarkand, Center',
		price: 200000,
		image: defaultImage,
		indoor: true,
	},
	{
		id: 3,
		name: 'Football Stadium',
		location: 'Tashkent, Chilanzar',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 4,
		name: 'Football Stadium',
		location: 'Bukhara',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 5,
		name: 'Football Stadium',
		location: 'Tashkent, Chilanzar',
		price: 180000,
		image: defaultImage,
		indoor: true,
	},
	{
		id: 6,
		name: 'Football Stadium',
		location: 'Navoiy',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 10,
		name: 'Football Stadium',
		location: 'Bukhara',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 12,
		name: 'Football Stadium',
		location: 'Bukhara',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
]

export default function StadiumManagement() {
	const [stadiums, setStadiums] = useState<Stadium[]>(initialStadiums)
	const [isAdding, setIsAdding] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [currentStadium, setCurrentStadium] = useState<Stadium | null>(null)

	const [formData, setFormData] = useState<Omit<Stadium, 'id'>>({
		name: '',
		location: '',
		price: 0,
		image: defaultImage,
		indoor: false,
	})

	const handleAddClick = () => {
		setIsAdding(true)
		setFormData({
			name: '',
			location: '',
			price: 150000,
			image: defaultImage,
			indoor: false,
		})
	}

	const handleEditClick = (stadium: Stadium) => {
		setIsEditing(true)
		setCurrentStadium(stadium)
		setFormData({
			name: stadium.name,
			location: stadium.location,
			price: stadium.price,
			image: stadium.image,
			indoor: stadium.indoor,
		})
	}

	const handleDeleteClick = (id: number) => {
		if (window.confirm('Are you sure you want to delete this stadium?')) {
			setStadiums(stadiums.filter(stadium => stadium.id !== id))
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		})
	}

	const handleSubmit = () => {
		if (isAdding) {
			const newId =
				(stadiums.length > 0
					? Math.max(...stadiums.map(s => s.id))
					: 0) + 1
			const newStadium: Stadium = {
				id: newId,
				...formData,
			}
			setStadiums([...stadiums, newStadium])
			setIsAdding(false)
		} else if (isEditing && currentStadium) {
			setStadiums(
				stadiums.map(stadium =>
					stadium.id === currentStadium.id
						? { ...stadium, ...formData }
						: stadium
				)
			)
			setIsEditing(false)
			setCurrentStadium(null)
		}

		setFormData({
			name: '',
			location: '',
			price: 0,
			image: defaultImage,
			indoor: false,
		})
	}

	const handleCancel = () => {
		setIsAdding(false)
		setIsEditing(false)
		setCurrentStadium(null)
		setFormData({
			name: '',
			location: '',
			price: 0,
			image: defaultImage,
			indoor: false,
		})
	}

	return (
	<div className='bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black min-h-screen'>
		<div className='container mx-auto w-11/12 py-10 px-4'>
			<div className='flex justify-between items-center mb-8'>
				<h1 className='text-3xl font-bold dark:text-white text-gray-900'>Stadium Management</h1>
				<button
					onClick={handleAddClick}
					className='bg-gradient-to-r from-green-500 to-blue-500 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform'
				>
					
					Add Stadium
				</button>
			</div>

			{(isAdding || isEditing) && (
				<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4'>
					<div className='bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-lg shadow-xl'>
						<div className='flex justify-between items-center mb-5'>
							<h2 className='text-2xl font-semibold dark:text-white'>
								{isAdding ? 'Add New Stadium' : 'Edit Stadium'}
							</h2>
							<button onClick={handleCancel} className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'>
								<X size={26} />
							</button>
						</div>

						<div className='space-y-4'>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Stadium Name'
								className='w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'
							/>

							<input
								type='text'
								name='location'
								value={formData.location}
								onChange={handleChange}
								placeholder='Location'
								className='w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'
							/>

							<input
								type='number'
								name='price'
								value={formData.price}
								onChange={handleChange}
								placeholder="Price (so'm/night)"
								className='w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'
							/>

							<label className='flex items-center space-x-2 text-gray-700 dark:text-gray-300'>
								<input
									type='checkbox'
									name='indoor'
									checked={formData.indoor}
									onChange={handleChange}
								/>
								<span>Indoor Stadium</span>
							</label>

							<div className='flex justify-end gap-3 pt-4'>
								<button
									onClick={handleCancel}
									className='px-4 py-2 border rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									Cancel
								</button>
								<button
									onClick={handleSubmit}
									className='px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center gap-2 transition'
								>
									<Check size={18} />
									{isAdding ? 'Add Stadium' : 'Save Changes'}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{stadiums.map(stadium => (
					<div
						key={stadium.id}
						className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-[1.02]'
					>
						<div className='relative h-48'>
							<img
								src={stadium.image}
								alt={stadium.name}
								className='w-full h-full object-cover'
							/>
							<div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3'>
								<h3 className='text-white font-semibold text-lg'>{stadium.name}</h3>
								<p className='flex items-center text-white text-sm opacity-80'>
									<MapPin size={14} className='mr-1' />
									{stadium.location}
								</p>
							</div>
						</div>
						<div className='p-4'>
							<div className='flex justify-between items-center mb-2'>
								<span className={`text-xs px-3 py-1 rounded-full font-medium ${stadium.indoor ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
									{stadium.indoor ? 'Indoor' : 'Outdoor'}
								</span>
								<p className='text-sm font-semibold text-gray-800 dark:text-white'>
									{stadium.price.toLocaleString()} so'm
									<span className='text-gray-500 text-xs'> </span>
								</p>
							</div>

							<div className='flex justify-end gap-2'>
								<button onClick={() => handleEditClick(stadium)} className='p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'>
									<Edit size={16} className='text-blue-600' />
								</button>
								<button onClick={() => handleDeleteClick(stadium.id)} className='p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600'>
									<Trash2 size={16} className='text-red-600' />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
)

}

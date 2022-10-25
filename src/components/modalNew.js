import Error from 'next/error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function modalNew({
	setShowModal,
	producto,
	router,
	handleSubmit,
	register,
	reset,
	formState: { isSubmitting, error },
}) {
	// Return response data

	const handleDelete = async () => {
		const request = new Request(
			'http://localhost:3000/api/inventory/' + producto.id,
			{
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
				},
			}
		);
		await fetch(request);
		router.push('/');
		setShowModal(false);
		// Always do navigations after the first render
	};

	async function saveFormData(data) {
		const request = new Request(
			'http://localhost:3000/api/inventory/',
			{
				body: JSON.stringify(data),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
			}
		);

		return await fetch(request);
	}

	const onSubmit = async (data) => {
		const savedatos = saveFormData(data);
		const promesas = new Promise((resolve, reject) => {
			savedatos.then((res) => {
				if (res.status === 201) {
					resolve(savedatos);
					reset();
					router.push('/');
				} else {
					reject(res.status === 500);
				}
			});
		});

		await toast.promise(promesas, {
			pending: 'Send...',
			success: 'New Registro ok 👌',
			error: 'New Registro Fail 🤯',
		});
	};

	return (
		<div>
			<form
				className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none '
				id='modal'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div
					role='alert'
					className='container w-11/12 max-w-lg mx-auto md:w-2/3'
				>
					<div className='relative px-5 py-8 bg-white border border-gray-400 rounded shadow-md md:px-10'>
						<div className='flex justify-start w-full mb-3 text-gray-600'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-wallet'
								width='52'
								height='52'
								viewBox='0 0 24 24'
								stroke='currentColor'
								fill='none'
							>
								<path stroke='none' d='M0 0h24v24H0z' />
								<path d='M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12' />
								<path d='M20 12v4h-4a2 2 0 0 1 0 -4h4' />
							</svg>
						</div>
						<h1 className='mb-4 font-bold leading-tight tracking-normal text-gray-800 font-lg'>
							{producto.code}
							Enter Billing Details
						</h1>
						<label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
							code
						</label>
						<input
							id='code'
							className='flex items-center w-full h-10 pl-3 mt-2 mb-5 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700'
							placeholder='code'
							{...register('code', { required: true })}
						/>
						<label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
							descripcion
						</label>
						<div className='relative mt-2 mb-5'>
							<input
								id='descripcion'
								className='flex items-center w-full h-10 pl-16 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700'
								placeholder='descripcion'
								{...register('descripcion', { required: true })}
							/>
						</div>
						<label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
							precentacion
						</label>
						<div className='relative mt-2 mb-5'>
							<input
								id='precentacion'
								className='flex items-center w-full h-10 pl-3 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700'
								placeholder='precentacion'
								{...register('precentacion', { required: true })}
							/>
						</div>
						<label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
							ubicacion
						</label>
						<div className='relative mt-2 mb-5'>
							<input
								id='ubicacion'
								className='flex items-center w-full h-10 pl-3 mb-8 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700'
								placeholder='ubicacion'
								{...register('ubicacion', { required: true })}
							/>
						</div>

						<label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
							cantidad
						</label>
						<div className='relative mt-2 mb-5'>
							<input
								id='cantidad'
								className='flex items-center w-full h-10 pl-3 mt-2 mb-5 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700'
								placeholder='cantidad'
								{...register('cantidad', { required: true })}
							/>
						</div>
						<label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
							foto
						</label>
						<div className='relative mt-2 mb-5'>
							<input
								id='foto'
								className='flex items-center w-full h-10 pl-3 mt-2 mb-5 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700'
								placeholder='foto'
								{...register('foto', { required: true })}
							/>
						</div>
						<div className='flex items-center justify-start w-full'>
							<button
								className='px-8 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600'
								onClick={handleDelete}
							>
								Submit
							</button>
							<button
								className='px-8 py-2 ml-3 text-sm text-gray-600 transition duration-150 ease-in-out bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:border-gray-400 hover:bg-gray-300'
								onClick={() => setShowModal(false)}
								type='button'
							>
								Cancel
							</button>
							<button
								className='px-8 py-2 ml-3 text-sm text-gray-600 transition duration-150 ease-in-out bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:border-gray-400 hover:bg-gray-300'
								aria-label='New Regitro'
								role='button'
								type='submit'
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Loading' : 'Send '}
							</button>
						</div>
						<button
							className='absolute top-0 right-0 mt-4 mr-5 text-gray-400 transition duration-150 ease-in-out rounded cursor-pointer hover:text-gray-600 focus:ring-2 focus:outline-none focus:ring-gray-600'
							onClick={() => setShowModal(false)}
							aria-label='close modal'
							role='button'
							type='button'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-x'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								stroke='currentColor'
								fill='none'
							>
								<path stroke='none' d='M0 0h24v24H0z' />
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</button>
					</div>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
}

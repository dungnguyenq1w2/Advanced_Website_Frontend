import './style.css'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { login } from 'apis/auth.api'
import { useNavigate } from 'react-router-dom'

function CLogin() {
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Hãy nhập Tên đăng nhập'),
		password: Yup.string().required('Hãy nhập Mật khẩu').min(6, 'Mật khẩu phải hơn 6 kí tự'),
	})

	const formOptions = { resolver: yupResolver(validationSchema) }

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(formOptions)

	const onSubmit = async (data) => {
		const res = await login(data)

		if (res?.data) {
			navigate('/btcn04')
		} else {
			setError(res.error.message)
			setTimeout(() => {
				setLoading(false)
			}, 600)
		}
	}

	return (
		<div>
			<div className='login'>
				<div className='login__top'>Đăng nhập</div>
				<form onSubmit={handleSubmit(onSubmit)} className='login__form'>
					<div className='login__item'>
						<label className='login__label' htmlFor='username'>
							Tên đăng nhập
						</label>
						<input
							className='login__input'
							name='username'
							{...register('username', { required: true })}
							type='text'
						/>
						<ErrorMessage
							errors={errors}
							name='username'
							render={() => (
								<span className='login__error'>{errors.username?.message}</span>
							)}
						/>
					</div>

					<div className='login__item'>
						<label className='login__label' htmlFor='password'>
							Mật khẩu
						</label>
						<input
							className='login__input'
							name='password'
							type='password'
							{...register('password', { required: true })}
						/>
						<ErrorMessage
							errors={errors}
							name='password'
							render={() => (
								<span className='login__error'>{errors.password?.message}</span>
							)}
						/>
					</div>

					{error && <span className='login__error'>{error}</span>}
					<div className='login__bottom '>
						<button className='btn__login ' type='submit'>
							Đăng nhập
						</button>
					</div>
					<div className='login__loading'>
						{loading ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='animate-ping h-5 w-5 mt-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
								/>
							</svg>
						) : null}
					</div>
				</form>
			</div>
		</div>
	)
}

export default CLogin

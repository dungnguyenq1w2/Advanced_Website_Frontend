import './style.css'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { login } from 'apis/auth.api'
import { useNavigate } from 'react-router-dom'
import CLoading from '../CLoading'

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
		setLoading(true)
		const res = await login(data)

		if (res?.data) {
			navigate(-1)
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
					<div className='login__loading'>{loading && <CLoading />}</div>
				</form>
			</div>
		</div>
	)
}

export default CLogin

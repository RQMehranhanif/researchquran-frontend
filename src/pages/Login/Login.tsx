/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Input } from 'antd';
import React, { useState } from 'react';
import '../../assets/Css/loginform.css';
import { SubmitLogin } from '../../Actions/LoginActions/Login';
import { OpenNotification } from "../../Actions/Utilities/Utilities";





const Login: React.FC = () => {
	const token = localStorage.getItem("token");
	if (typeof token === "undefined" && token === "" && token === null) {
		window.location.href = "/";
	}
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const [loading, settLoading] = useState<boolean>(false);
	const handleChange = (e: { target: { value: any; name: any } }) => {
		const { value } = e.target;
		setCredentials({
			...credentials,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		settLoading(true);
		SubmitLogin(credentials)
			.then(({ data: response }) => {
				settLoading(false);
				if (response.success) {
					localStorage.setItem("arabicLetters", JSON.stringify(response.arabice_letters));
					localStorage.setItem("surahs", JSON.stringify(response.surahs));
					localStorage.setItem("token", response.token);
					localStorage.setItem("userName", response.user_data[0].name);
					localStorage.setItem("role_id", response.user_data[0].role);
					localStorage.setItem("userId", response.user_data[0].id);
					window.location.href = "/";
					OpenNotification("success", response.message);
				}
			})
			.catch(() => {
				OpenNotification(
					"error",
					"These credentials do not match our records."
				);
				settLoading(false);
			});
	};
	// console.log(arrayWords)
	return (
		<main className="main">
			<div className="container">
				<section className="wrapper">
					<div className="heading">
						<h1 className="text text-large">Sign In</h1>
						<p className="text text-normal">New user? <span><a href="#" className="text text-links">Request an account</a></span>
						</p>
					</div>
					<form name="signin" className="form" onSubmit={handleSubmit}>
						<div className="input-control">
							<label className="input-label" hidden>Email Address</label>
							<Input
								type="email"
								name="email"
								id="email"
								className="input-field"
								placeholder="Email Address"
								onChange={(e: any) => handleChange(e)}
							/>
						</div>
						<div className="input-control">
							<label className="input-label" hidden>Password</label>
							<Input
								type="password"
								name="password"
								id="password"
								className="input-field"
								placeholder="Password"
								onChange={(e: any) => handleChange(e)}
							/>
						</div>
						<div className="input-control">
							{/* <a href="#" className="text text-links">Forgot Password</a> */}
							<Button
								className='input-submit'
								type='primary'
								name="submit"
								loading={loading}
								htmlType="submit"
							>
								Sign In
							</Button>
						</div>
					</form>
				</section>
			</div>
		</main>
	);
};

export default Login;


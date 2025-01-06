import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user Updated');
                        reset();
                        Swal.fire({
                            title: "SignUp Success!",
                            showClass: {
                                popup: `
                                            animate__animated
                                            animate__fadeInUp
                                            animate__faster
                                          `
                            },
                            hideClass: {
                                popup: `
                                            animate__animated
                                            animate__fadeOutDown
                                            animate__faster
                                          `
                            }
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })


    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUP now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-500'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6, maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className='text-red-500'>Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-500'>Password must be 6 characters </p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-500'>Password must be less than 20 characters </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-500'>Password must have one uppercase, one lowercase, one special character, and one number </p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center py-2'><small>Already have an Account? <Link to='/login' className='text-green-950'>Login Here!</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
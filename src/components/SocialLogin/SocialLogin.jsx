import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            };

            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div>
            <div className='text-center py-4'>
                <button onClick={handleGoogle} className="btn hover:bg-blue-300">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
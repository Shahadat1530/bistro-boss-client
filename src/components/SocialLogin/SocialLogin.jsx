import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
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
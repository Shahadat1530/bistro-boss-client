import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = (food) => {
        if (user && user?.email) {
            // do something/ store the data
        }
        else {
            Swal.fire({
                title: "You are not login!",
                text: "Please, login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="" />
            </figure>
            <p className='absolute right-5 top-3 text-white bg-black px-4 rounded-md'>${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 hover:text-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Food Added To The Cart!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

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
                    navigate('/login', { state: { from: location } });
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
                        onClick={handleAddToCart}
                        className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 hover:text-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
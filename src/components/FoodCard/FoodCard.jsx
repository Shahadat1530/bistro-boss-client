import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    const handleAddToCart = (food) => {
        console.log(food);
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
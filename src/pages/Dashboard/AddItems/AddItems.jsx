import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <SectionTitle
                subHeading={"What's New?"} heading={'add an item'}
            ></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe name */}
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input {...register("name")} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {/* category */}
                        <div>
                            <label className="form-control w-full my-6">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select
                                    {...register("category")}
                                    className="select select-bordered w-full">
                                    <option disabled selected>Select Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </label>
                        </div>
                        {/* price */}
                        <div>
                            <label className="form-control w-full my-6">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* textArea */}
                    <div>
                        <label className="form-control my-6">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        </label>
                    </div>
                    {/* image */}
                    <div className="form-control w-full mb-6">
                        <input {...register('image')} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
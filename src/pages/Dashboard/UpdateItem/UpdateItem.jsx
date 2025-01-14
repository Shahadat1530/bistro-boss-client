import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Updated Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div>
            <SectionTitle
                subHeading={'Refresh Info'} heading={'update an item'}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe name */}
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {/* category */}
                        <div>
                            <label className="form-control w-full my-6">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select defaultValue={category}
                                    {...register("category", { required: true })}
                                    className="select select-bordered w-full">
                                    <option disabled value={'default'}>Select Category</option>
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
                                <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* recipe */}
                    <div>
                        <label className="form-control my-6">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                            <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        </label>
                    </div>
                    {/* image */}
                    <div className="form-control w-full mb-6">
                        <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Menu Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
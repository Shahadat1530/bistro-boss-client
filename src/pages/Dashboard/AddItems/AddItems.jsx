import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

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
                    <input {...register("name")} />
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <select
                        {...register("category")}
                        className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;
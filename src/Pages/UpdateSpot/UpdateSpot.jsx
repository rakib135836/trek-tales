import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FirebaseContext } from '../../FirebaseProvider/FirebaseProvider';

const UpdateSpot = () => {

    const { user } = useContext(FirebaseContext)

    const notify = () => toast("data updated successfully ");

    const spot = useLoaderData();
    const {_id,  image, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, visitors } = spot;

    const handleUpdateTouristSpot = event => {
        event.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const email = user?.email;
        const userName = user?.displayName;


        const updatedTouristSpot = {image, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, visitors, email, userName };
        console.log(updatedTouristSpot);



        // sending data to the server 

        fetch(`https://trektales-server.vercel.app/new-spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTouristSpot)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    notify('data updated successfully');
                }
            })



    }



    return (
        <div>
            <div className="p-24 bg-gray-100 rounded-lg my-5">

                <h1 className="text-3xl font-bold text-center my-7">Update tourist spot </h1>

                <form onSubmit={ handleUpdateTouristSpot}>

                    {/* input row - name and spot name  */}
                    <div className="flex flex-col lg:flex-row gap-5 mb-3">

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Image Url</span>
                            </div>
                            <input type="text" name="image" defaultValue={image} placeholder="your image url" className="input input-bordered w-full " />

                        </label>

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Tourist spot name</span>
                            </div>
                            <input type="text" name="spotName" defaultValue={spotName} placeholder="write tourist spot name here " className="input input-bordered w-full " />

                        </label>

                    </div>
                    {/* input row -country name and location  */}
                    <div className="flex flex-col lg:flex-row gap-5 mb-3 ">

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Country Name</span>
                            </div>
                            <input type="text" name="countryName" defaultValue={countryName} placeholder="Add country name " className="input input-bordered w-full " />

                        </label>

                        <label className="form-control lg:w-1/2  ">
                            <div className="label">
                                <span className="label-text">Location</span>
                            </div>
                            <input type="text" name="location" defaultValue={location} placeholder="Add spot location " className="input input-bordered w-full " />

                        </label>

                    </div>
                    {/* input row -short description  average_cost */}
                    <div className="flex flex-col lg:flex-row  gap-5 mb-3">

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Add a short description" className="input input-bordered w-full " />

                        </label>

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Average Cost</span>
                            </div>
                            <input type="text" name="averageCost" defaultValue={averageCost} placeholder="how much it will cost " className="input input-bordered w-full " />

                        </label>

                    </div>
                    {/* input row - seasonality, travel_time */}
                    <div className="flex flex-col lg:flex-row gap-5 mb-3">

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Seasonality</span>
                            </div>
                            <input type="text" name="seasonality" defaultValue={seasonality} placeholder="which is best to visit here" className="input input-bordered w-full " />

                        </label>

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Travel Time</span>
                            </div>
                            <input type="text" name="travelTime" defaultValue={travelTime} placeholder="your travel time " className="input input-bordered w-full" />

                        </label>

                    </div>
                    {/* input row -i. total VisitorsPerYear  User Emai */}
                    <div className="flex flex-col lg:flex-row gap-5 mb-3">

                        <label className="form-control lg:w-1/2">
                            <div className="label">
                                <span className="label-text">Visitors Per Year</span>
                            </div>
                            <input type="text" name="visitors" defaultValue={visitors} placeholder="Visitors Per Year" className="input input-bordered w-full" />

                        </label>

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" name="email" defaultValue={user ? user.email : ""} className=" pointer-events-none input input-bordered w-full " readOnly />

                        </label>

                    </div>
                    {/* input row - */}
                    <div className="flex flex-col lg:flex-row mb-3">

                        <label className="form-control lg:w-1/2 ">
                            <div className="label">
                                <span className="label-text">User name</span>
                            </div>
                            <input type="text" name="userName" defaultValue={user ? user.displayName : ""} className="pointer-events-none input input-bordered w-full " readOnly />

                        </label>

                    </div>

                    <input type="submit" value="Update spot" className="btn btn-block my-7" />

                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateSpot;


const AddTouristsSpot = () => {



    
    return (
        <div className="p-24 bg-gray-100 rounded-lg my-5">

            <h1 className="text-3xl font-bold text-center my-7">Add tourist spot </h1>
            <form>

                {/* input row - name and spot name  */}
                <div className="flex flex-col lg:flex-row gap-5 mb-3">

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Image Url</span>
                        </div>
                        <input type="text" name="image" placeholder="your image url" className="input input-bordered w-full " />
                        
                    </label>

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Tourist spot name</span>
                        </div>
                        <input type="text" name="spot-name" placeholder="write tourist spot name here " className="input input-bordered w-full " />
                        
                    </label>

                </div>
                {/* input row -country name and location  */}
                <div className="flex flex-col lg:flex-row gap-5 mb-3 ">

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Country Name</span>
                        </div>
                        <input type="text" name="country-name" placeholder="Add country name " className="input input-bordered w-full " />
                        
                    </label>

                    <label className="form-control lg:w-1/2  ">
                        <div className="label">
                            <span className="label-text">Location</span>
                        </div>
                        <input type="text" name="location" placeholder="Add spot location " className="input input-bordered w-full " />
                        
                    </label>

                </div>
                {/* input row -short description  average_cost */}
                <div className="flex flex-col lg:flex-row  gap-5 mb-3">

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Short Description</span>
                        </div>
                        <input type="text" name="short-description" placeholder="Add a short description" className="input input-bordered w-full " />
                        
                    </label>

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Average Cost</span>
                        </div>
                        <input type="text" name="average-cost" placeholder="how much it will cost " className="input input-bordered w-full " />
                        
                    </label>

                </div>
                {/* input row - seasonality, travel_time */}
                <div className="flex flex-col lg:flex-row gap-5 mb-3">

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Seasonality</span>
                        </div>
                        <input type="text" name="seasonality" placeholder="which is best to visit here" className="input input-bordered w-full " />
                        
                    </label>

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Travel Time</span>
                        </div>
                        <input type="text" name="travel-time" placeholder="your travel time " className="input input-bordered w-full" />
                        
                    </label>

                </div>
                {/* input row -i. total VisitorsPerYear  User Emai */}
                <div className="flex flex-col lg:flex-row gap-5 mb-3">

                    <label className="form-control lg:w-1/2">
                        <div className="label">
                            <span className="label-text">Visitors Per Year</span>
                        </div>
                        <input type="text" name="visitors" placeholder="Visitors Per Year" className="input input-bordered w-full" />
                        
                    </label>

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" name="email" placeholder="your-email@gmail.com " className="input input-bordered w-full " />
                        
                    </label>

                </div>
                {/* input row - */}
                <div className="flex flex-col lg:flex-row mb-3">

                    <label className="form-control lg:w-1/2 ">
                        <div className="label">
                            <span className="label-text">User name</span>
                        </div>
                        <input type="text" name="user-name" placeholder="write down your name " className="input input-bordered w-full " />
                        
                    </label>

                </div>

                <input type="submit" value="Add spot" className="btn btn-block my-7" />

            </form>
        </div>
    );
};

export default AddTouristsSpot;


const AdventureActivitiesSection = () => {
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Adventure Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Scuba Diving</h3>
                            <p className="text-gray-700">Explore the underwater world and discover vibrant coral reefs and marine life while scuba diving.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Hiking Trails</h3>
                            <p className="text-gray-700">Embark on scenic hiking trails through lush forests, majestic mountains, and breathtaking landscapes.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Paragliding</h3>
                            <p className="text-gray-700">Soar through the sky and experience the thrill of paragliding while enjoying panoramic views from above.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdventureActivitiesSection;
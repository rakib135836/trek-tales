

const TravelTipsSection = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Travel Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Pack Lightly</h3>
                            <p className="text-gray-700">Only pack essentials and versatile clothing items to avoid overpacking and excess baggage fees.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Stay Hydrated</h3>
                            <p className="text-gray-700">Drink plenty of water, especially when flying, to stay hydrated and avoid jet lag.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Research Local Customs</h3>
                            <p className="text-gray-700">Learn about the customs and etiquette of the destination youre visiting to show respect to the local culture.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TravelTipsSection;
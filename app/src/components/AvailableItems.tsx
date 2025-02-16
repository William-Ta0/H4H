import React, { useEffect, useState } from 'react';

const AvailableItems: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    useEffect(() => {
        const fetchAvailableItems = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/items/available');
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchAvailableItems();
    }, []);

    const handleItemClick = (itemId: string) => {
        setSelectedItemId(itemId);
        setShowPopup(true); // Show the popup when the item box is clicked
    };

    const handleCheckout = async (itemId: string) => {
        try {
            console.log("Checking out item with ID:", itemId); // Log the itemId being checked out
            const response = await fetch(`http://localhost:5001/api/items/checkout/${itemId}`, {
                method: 'POST',
                body: JSON.stringify({ userId: '67b16feb91a1919afce515c3' }),
            });
            if (!response.ok) {
                throw new Error('Failed to checkout item');
            }
            // Remove the item from the displayed list
            setItems(prevItems => prevItems.filter(item => item._id !== itemId));
        } catch (err) {
            console.error("Checkout error:", err); // Log the error for debugging
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error("Error fetching items:", error);
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold text-[#b30638] mb-6 text-center border-b-2 border-gray-300 pb-2">Available Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                    <div
                        key={item._id}
                        className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => handleItemClick(item._id)}
                    >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-center">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-red bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h3 className="text-lg font-semibold">Do you want to take this item?</h3>
                        <div className="mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                onClick={() => {
                                    
                                    if (selectedItemId) {
                                        
                                        handleCheckout(selectedItemId);
                                    }
                                    console.log("Selected item ID:", selectedItemId );
                                    setShowPopup(false);
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={() => setShowPopup(false)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvailableItems; 
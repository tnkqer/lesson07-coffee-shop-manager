'use client';

import { useState } from 'react';

// OrderForm Component - demonstrates form handling and array state updates
export default function OrderForm({ orders, setOrders }) {
    // ========================================
    // 📚 DEMO: useState with setCoffeeName on Input Change
    // ========================================
    // This state tracks the coffee name as the user types
    const [coffeeName, setCoffeeName] = useState('');

    const handleAddOrder = (e) => {
        e.preventDefault();
        
        // ========================================
        // 🎯 EXERCISE useState 1: Reset Coffee Name
        // ========================================
        // TODO: Reset the coffeeName back to empty string after adding order
        // Hint: Use setCoffeeName('') to clear the input field
        setCoffeeName('');

        // ========================================
        // 🎯 EXERCISE useState 2: Update Order Array
        // ========================================
        // TODO: Add the new coffee order to the orders array
        // Hint: Use the spread operator to create a new array: [...orders, coffeeName]
        // Hint: Call setOrders with the new array
        // Hint: Add a console.log to see when an order is added
        orders = [...orders, coffeeName];
        setOrders(orders);
        console.log(orders);
    };

    return (
        <div className="bg-[#F5E6D3] p-6 rounded-lg border-2 border-[#D2B48C]">
            <h2 className="text-xl font-bold text-[#5D4E37] mb-4">
                Order List Manager
            </h2>
            
            <form onSubmit={handleAddOrder} className="space-y-3">
                <div>
                    <label className="block text-[#5D4E37] mb-2 font-medium">
                        Coffee Name:
                    </label>
                    <input
                        type="text"
                        value={coffeeName}
                        onChange={(e) => setCoffeeName(e.target.value)}
                        placeholder="e.g., Latte, Americano, Cappuccino"
                        className="w-full px-4 py-2 border-2 border-[#D2B48C] rounded bg-white text-[#5D4E37] placeholder-[#D2B48C]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#8B7355] text-white px-4 py-2 rounded hover:bg-[#6D5A43] transition-colors font-medium"
                >
                    ☕ Add Order
                </button>
            </form>
        </div>
    );
}

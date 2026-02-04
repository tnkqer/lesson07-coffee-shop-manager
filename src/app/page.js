'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CustomerCounter from '../components/CustomerCounter';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';

export default function CoffeeShopManager() {
    // ========================================
    // 📚 DEMO useState 1: with Customer Count
    // ========================================
    const [customerCount, setCustomerCount] = useState(0);

    // ========================================
    // 📚 DEMO useState 2: with Orders Array
    // ========================================
    const [orders, setOrders] = useState([]);

    // ========================================
    // 📚 DEMO useEffect 1: Update Document Title
    // ========================================
    // This useEffect runs whenever customerCount or orders change
    useEffect(() => {
        document.title = `${customerCount}👥 | ${orders.length}☕ ITCoffee`;
        console.log('Document title updated');
    }, [customerCount, orders]);

    useEffect(() => {
        console.log('Loading saved data from localStorage...');

        // ========================================
        // 📚 DEMO useEffect 3: Load saved customer count from localStorage on Mount
        // ========================================
        const savedCustomerCount = localStorage.getItem('coffeeShop_customerCount');
        if (savedCustomerCount !== null) {
            setCustomerCount(parseInt(savedCustomerCount, 10));
            console.log('✅ Loaded customer count:', savedCustomerCount);
        };

        // ========================================
        // 🎯 EXERCISE useEffect 2: Load saved order from localStorage on Mount
        // ========================================
        // Hint: Load orders with localStorage.getItem('coffeeShop_orders')
        // Hint: Check if the values exist before setting state (if (savedValue) { ... })
        // Hint: Remember to parse the JSON string for orders before use setOrders: JSON.parse(savedOrders)
        const savedOrders = localStorage.getItem('coffeeShop_orders');
        if (savedOrders !== null) {
            setOrders(JSON.parse(savedOrders));
            console.log('✅ Loaded orders:', savedOrders);
        };

    }, []);

    // ========================================
    // 📚 DEMO useEffect 2: Auto-save Customer Count
    // ========================================
    // This useEffect saves customerCount to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('coffeeShop_customerCount', customerCount.toString());
        console.log('Saved customer count:', customerCount);
    }, [customerCount]);

    // ========================================
    // 🎯 EXERCISE useEffect 1: Auto-save Orders
    // ========================================
    // TODO: Create a useEffect that saves orders to localStorage whenever orders change
    // Hint: Use localStorage.setItem('coffeeShop_orders', JSON.stringify(orders))
    // Hint: The dependency array should include [orders]
    // Hint: Don't forget to add a console.log to see when it runs!
    useEffect(() => {
        localStorage.setItem('coffeeShop_orders', JSON.stringify(orders));
        console.log('Saved orders:', orders);
    }, [orders]);

    return (
        <div className="min-h-screen bg-[#D2B48C] py-8 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <div className="space-y-6">
                    <CustomerCounter 
                        count={customerCount} 
                        setCount={setCustomerCount} 
                    />

                    <OrderForm 
                        orders={orders} 
                        setOrders={setOrders} 
                    />
                    
                    <OrderList 
                        orders={orders}
                    />
                </div>
            </div>
        </div>
    );
}
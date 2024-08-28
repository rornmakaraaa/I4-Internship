import { useState } from 'react';

export default function PricingToggle() {
const [isAnnual, setIsAnnual] = useState(true);

return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 className="text-3xl font-bold">Plan and Pricing</h2>
        <p className="mt-2 text-gray-400">Receive unlimited project when you pay yearly,</p>
        <p className='text-gray-400'>and save your plan</p>
    <div style={{
        display: 'inline-flex',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    }}>
        <button style={{
            padding: '10px 20px',
            backgroundColor: isAnnual ? '#f5f5f5' : '#fff',
            color: '#888',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
        }}
        onClick={() => setIsAnnual(false)}
        >
        Monthly
        </button>
        <button style={{
            padding: '10px 20px',
            backgroundColor: isAnnual ? '#ff8ea2' : '#f5f5f5',
            color: isAnnual ? '#fff' : '#888',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
        }}
        onClick={() => setIsAnnual(true)}
        >
        Annual <span style={{ fontWeight: 'bold'}}>Save 20%</span>
        </button>
    </div>
    </div>
);
}

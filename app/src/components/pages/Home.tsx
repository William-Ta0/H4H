import React from 'react';
import AvailableItems from '../AvailableItems';
import { Header } from '../Header';

export const Home: React.FC = () => {
    return (
        <div>
            {/* <p>Available Items</p> */}
            <AvailableItems />
        </div>
    );
};

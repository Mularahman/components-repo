import  Button  from './components/button';
import 'components-repo/dist/tailwind.css'; // Pastikan mengimpor CSS
import React from 'react';

const HomePage = () => (
    <div className="p-4">
        <Button variant="primary" onClick={() => alert('Button clicked!')}>
            Primary Button
        </Button>
    </div>
);

export default HomePage;

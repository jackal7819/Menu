import Menu from './Menu';
import Title from './Title';
import { data } from './data';
import { useState } from 'react';

const App = () => {
    const [menu, setMenu] = useState(data);

    return (
        <main className='menu'>
            <Title text='Our menu' />
            <Menu menu={menu} />
        </main>
    );
};

export default App;

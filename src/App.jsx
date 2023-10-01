import Menu from './Menu';
import Title from './Title';
import { data } from './data';
import { useState } from 'react';

const App = () => {
    const [menu, setMenu] = useState(data);

    return (
        <main>
            <section className='menu'>
                <Title text='Our menu' />
                <Menu menu={menu} />
            </section>
        </main>
    );
};

export default App;

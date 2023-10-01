import Menu from './Menu';
import Title from './Title';
import { data } from './data';
import { useState } from 'react';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
    const [menu, setMenu] = useState(data);
    const [categories, setCategories] = useState(allCategories);

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

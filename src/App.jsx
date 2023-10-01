import Categories from './Categories';
import Menu from './Menu';
import Title from './Title';
import { data } from './data';
import { useState } from 'react';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
    const [menu, setMenu] = useState(data);
    const [categories, setCategories] = useState(allCategories);

    const handleCategory = (event) => {
        const category = event.target.innerText;
        const newMenu =
            category === 'All'
                ? data
                : data.filter((item) => item.category === category);
        setMenu(newMenu);
    };

    return (
        <main>
            <section className='menu'>
                <Title text='Our menu' />
                <Categories
                    categories={categories}
                    handleCategory={handleCategory}
                />
                <Menu menu={menu} />
            </section>
        </main>
    );
};

export default App;

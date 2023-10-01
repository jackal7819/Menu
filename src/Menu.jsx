import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
    return (
        <div className='center'>
            {menu.map((item) => (
                <MenuItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Menu;

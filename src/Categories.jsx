const Categories = ({ categories, handleCategory }) => {

    return (
        <div className='btn-container'>
            {categories.map((category) => (
                <button className='btn' key={category} onClick={handleCategory}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;

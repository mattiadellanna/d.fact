import { Link } from 'react-router-dom';

const ItemPreview = ({ item, index = 0, col = 50 }) => {
    return (
        <Link key={item.slug} to={`/portfolio/${item.slug}`}  className={`margin bottom-large padding ${index % 2 === 0 ? "right" : "left"}-medium item-preview col-${col}`}>
            <div style={{backgroundImage: `url(/projects/${item.slug}/preview.jpg)`}} className={`background-cover image`}>
                <div className='overlay'></div>
                <h3 className='extra-light padding medium item-title'>{item.title}</h3>
            </div>
        </Link>
    );
};

export default ItemPreview;
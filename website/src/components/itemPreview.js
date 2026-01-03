import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const ItemPreview = ({ item, index = 0 }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.unobserve(el);
                }
            },
            {
                threshold: 0.03
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <Link ref={cardRef} key={item.slug} to={`/portfolio/${item.slug}`} className="card reveal" style={{ transitionDelay: `${index * 150}ms` }}>
            <div className='card-image'>
                <img src={`/projects/${item.slug}/preview.jpg`} alt={item.title} />
            </div>
            <div>
                <br/>
                <h4>{item.title}</h4>
                <div className='project-tags'>
                    {item.tags.map((tag, i) => (
                        <small className='color-grey' key={i}>{tag}{i < item.tags.length - 1 ? ', ' : null}</small>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ItemPreview;
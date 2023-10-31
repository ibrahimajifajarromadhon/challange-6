import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaPlayCircle } from 'react-icons/fa';
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/postActions";

const CarouselSlider = () => {
    // To set the state of the store
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Access the store
    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            {posts && posts.length > 0 && posts.slice(0, 3).map((movie, idx) => (
                <Carousel.Item key={idx} >
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="img" alt={`Movie ${idx}`} style={{ width: "100%"}} />
                    <Carousel.Caption className="Movie-caption" style={{ textAlign: "left", marginLeft: "-180px", width: "50%", marginBottom: "210px" }}>
                        <h1 className='Movie-judul'>{movie.title}</h1>
                        <p className='Movie-deskripsi'>{movie.overview}</p>
                        <a href="#" className="Movie-btn" style={{ maxWidth: '200px' }}> <FaPlayCircle style={{ marginRight: '5px', marginBottom: "2px" }} />WATCH TRAILER</a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselSlider;
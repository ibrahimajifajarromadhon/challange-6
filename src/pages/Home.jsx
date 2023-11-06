import { useEffect } from 'react';
import '../App.css';
import CarouselSlider from '../components/CarouselSlider';
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/postActions";

const Home = () => {
    // To set the state of the store
    const dispatch = useDispatch();

    // Access the store 
    const { searchResults } = useSelector((state) => state.post);

    // Access the store
    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    return (
        <div >
            <Header/>
            <CarouselSlider />
                <div className="Movie-content" style={{ marginBottom: "80px", marginTop:"50px" }}>
                    <h2 className='Movie-popular' style={{ marginLeft: "15px" }}>Popular Movie</h2>
                    <a href='#' className='Movie-more' style={{ marginRight: "10px", float: "right" }}>See All Movie<FaArrowRight className='Movie-arrowRight' /></a>

                    {searchResults.length > 0 ? (
                        <div className='Movie-container'>
                            {searchResults.map((item) => (
                                <div className='Movie-wrapper' key={item.id}>
                                    <Link to={`/movie/${item.id}`} >
                                        <img
                                            className='Movie-image'
                                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                            alt={item.title}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) :  (
                        <div className='Movie-container'>
                            {posts.length > 0 ? (
                                posts.map((item) => (
                                    <div className='Movie-wrapper' key={item.id}>
                                        <Link to={`/movie/${item.id}`}>
                                            <img
                                                className='Movie-image'
                                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                                alt={item.title}
                                            />
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p>Daftar Film Kosong!. Silakan Login Atau Register Untuk Melihat Daftar Film.</p>
                            )}
                        </div>
                    )}
                </div>
            <Footer />
        </div>
    );
}

export default Home;
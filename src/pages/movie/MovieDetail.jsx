import { useEffect } from 'react';
import { FaPlayCircle, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../../redux/actions/postActions";

const MovieDetail = () => {
  // To set the state of the store
  const dispatch = useDispatch();
  
  // Access parameter id
  const { id } = useParams();

  // Access the store
  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  if (!postDetails) {
    return <p>Loading...</p>;
  }

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${postDetails.backdrop_path}`;

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '999',
  };

  const containerStyle = {
    display: 'flex',
    color: 'white',
    marginTop: '200px',
    minHeight: '100vh',
  };

  return (
    <div className="Movie-detail" style={backgroundStyle}>
      <div className="container" style={containerStyle}>
        <div className="Movie-detail-content">
          <h1 className='Movie-detail-judul' style={{ marginBottom: "30px" }}>{postDetails.title}</h1>
          <p>Genres: {postDetails.genres.map(genre => genre.name).join(', ')}</p>
          <p>Tanggal Rilis: {postDetails.release_date}</p>
          <p><FaStar style={{ color: 'gold', marginLeft: '0px', marginBottom: "5px" }} /> {postDetails.vote_average} / 10</p>
          <p>{postDetails.overview}</p>
          <a href="#" className="Movie-btn" style={{ marginLeft: "0px" }}>
            <FaPlayCircle style={{ marginRight: '5px', marginBottom: '20px', marginTop: "15px" }} />
            WATCH TRAILER
          </a>
          <Link to={'/'}><button type="button" className="Movie-back">BACK TO HOME</button></Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
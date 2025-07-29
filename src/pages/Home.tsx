import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
        <h1>ミニアプリ集へようこそ</h1>
        <Link to='/omikuji'><button>おみくじ</button></Link>
        <Link to='/counter'><button>カウンター</button></Link>
        <Link to='/weather'><button>天気</button></Link>
        
        </>
    )
}

export default Home;
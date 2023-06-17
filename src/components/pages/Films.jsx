import { Link } from "react-router-dom";

const Films = () => {
    const films = [ "film-1", "film-2", "film-3", "film-4", "film-5" ];
    return <div>{films.map(film => {
        return <Link key={film} to={`${film}`}>
            {film}
        </Link>
    })}</div>
}

export default Films;
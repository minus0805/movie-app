//컴포넌트는 대문자로 시작
//class 컴포넌트는 리액트 컴포넌트의 render메소드를 들고옴
//state는 class에서 사용할 수 있고, 컴포넌트의 동적인 데이터를 넣을 수 있는 오브젝트임!
//setState를 사용해야 state 리프레시 + render메소드가 호출됨
//setState안에서 state를 사용하지 말자. current를 파라미터로 함수 사용하기
// this.setState({count: this.state.count - 1}) X
//this.setState(current => ({count: current.count + 1}) O
//render 다음에 componentDidMount 실행
//1. state, context, defaultProps 저장
//2. componentWillMount
//3. render
//4. componentDidMount

import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async() => {
        const {
            data: {
                data : { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        this.setState({ movies, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                    {movies.map((movie, index) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                order={index}
                            />
                        ))}
                    </div>
                    )}
            </section>
        )
    }
}

export default Home;

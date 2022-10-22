import { useQuery } from 'react-query';
import { getMovies, IGetMoviesResult } from '../api/api';
import {
  Banner,
  Loader,
  Overview,
  Title,
  Wrapper,
} from '../style/Components/Home';
import { makeImagePath } from '../utils/utils';

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies,
  );
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[2].backdrop_path || '')}>
            <Title>{data?.results[2].title}</Title>
            <Overview>{data?.results[2].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
}

export default Home;

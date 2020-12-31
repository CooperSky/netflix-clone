import './App.css';
import Row from './Row'
import request from './requests';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" isLargeRow fetchUrl = {request.fetchNetflixOriginals}/>
      <Row title="Trending now"  fetchUrl = {request.fetchTrending}/>
      <Row title="Top Rated"  fetchUrl = {request.fetchTopRated}/>
      <Row title="Action Movies"  fetchUrl = {request.fetchActionMovies}/>
      <Row title="Comedy Movies"  fetchUrl = {request.fetchComedyMovies}/>
      <Row title="Horror Movies"  fetchUrl = {request.fetchHorrorMovies}/>
      <Row title="Documentries"  fetchUrl = {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;

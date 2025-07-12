import NavBar from '../components/NavBar';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  function goToLogin (){
    navigate('/login');
  }



  return (
    <>
      <NavBar />
      <div className="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is the starting point of your messaging app</p>
        <div>
          <Button className="getStartedBtn" type="button" children="Get Started" onclick={goToLogin}/>
        </div>
      </div>
    </>
  );
}

export default Home;
import Button from '../components/Button';


function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the starting point of your messaging app</p>
      <div>
        <Button children="Get Started"/>
      </div>
    </div>
  );
}

export default Home;
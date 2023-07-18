import './App.css';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className='profilo'>
    <img src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/277247487_2456437561156990_2926814411132325054_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=plJpeqTEl80AX-AfNHq&_nc_ht=scontent.ftun10-1.fna&oh=00_AfD-GS8LgAXWs0k-CkfZHzBt8Ntc_9l9vPdssZahv4uVog&oe=644FFDC9" 
    alt="oussema"
    width={200}
    height={200}
    style={{borderRadius: '50%', marginTop: '40px'}}  />
      <Profile fullName="Oussema Hidri" bio="Software Engineer" profession="Full Stack Developer" handleName={() => {}} >
      </Profile>
    </div>
  );
}

export default App;
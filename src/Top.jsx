import ProfilePic from './assets/images/avatar-jessica.jpeg'
import './styles/Top.css'

function Top() {
    return (
        <div className="top-container">
            <div>
                <img className='profile-picture' src={ProfilePic} alt="Profile Picture" />
            </div>
            
            <h1 className='profile-name'>Jessica Randall</h1>
            <h2 className='profile-address'>London, United Kingdom</h2>
            <h3 className='profile-object'>"Front-End Developer and avid reader."</h3>
        </div>
    );
}

export default Top
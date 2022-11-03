import './App.css';
import img from '../src/assets/profile_img.png'
import Link from './components/link/Link';
import foot1 from '../src/assets/Vector_text.png';
import foot2 from '../src/assets/Vector_dot.png';
import footText from '../src/assets/footer_text.png';
import i4g from '../src/assets/I4G.png';
import share from '../src/assets/share.png';
import slack1 from '../src/assets/slack1.png';
import slack2 from '../src/assets/slack2.png';
import slack3 from '../src/assets/slack3.png';
import slack4 from '../src/assets/slack4.png';
import slackIcon from '../src/assets/slack-icon.png';
import github from '../src/assets/github.png';
import shareWeb from '../src/assets/share-web.png';
import shareMobile from '../src/assets/share-mobile.png';


function App() {
  return (
    <div className='page'>
      <div className="main">
        <div className="profile-section">
          <img src={img} alt="" id='profile__img' />
          <h3 className="name" id='twitter'>bundeuji</h3>
          <h3 id='slack'>Bunde</h3>
          <img src={shareWeb} alt="" className='share' />
          <img src={shareMobile} alt="" className='shareMobile' />
        </div>

        <div className="links-section">
          <Link text="Twitter Link" url='https://twitter.com/bundeuji' />
          <Link text="Zuri Team" url='https://training.zuri.team/' id='btn__zuri' />
          <Link text="Zuri Books" url='http://books.zuri.team' id='books' />
          <Link text="Python Books" url='https://books.zuri.team/python-for-beginners?ref_id=Bunde' id='book__python' />
          <Link text="Background Check for Coders" url='https://background.zuri.team' id='pitch' />
          <Link text="Design Books" url='https://books.zuri.team/design-rules' id='book__design' />
        </div>

        <div className="socials-section">
          <img src={slackIcon} alt="" className='social' />
          <img src={github} alt="" className='social' />
        </div>
      </div>

      <div className="footer">
        <div className="footer-inner-container">
          <div className="footer-item zuri" id='zuri'>
            <img src={foot1} alt="" className='foot1' />
            <img src={foot2} alt="" className='foot2' />
          </div>
          <img src={footText} alt="" className="footer-item" id='text'/>
          <img src={i4g} alt="" className="footer-item" id='i4g'/>
        </div>
      </div>
    </div>
  );
}

export default App;

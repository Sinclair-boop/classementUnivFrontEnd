import { dataFooter } from './dataFooter'
import facebook from '../../assets/images/facebook.png'
import youtube from '../../assets/images/youtube.png'
import twitter from '../../assets/images/twitter.png'
import { Link } from 'react-router-dom'

const SocialNetwork = ({ image, text, link }) => {
  return (
    <li>
      <Link to={link} className = 'el-link'>
        <img src={image} />
        {text}
      </Link>
    </li>
  )
}

const SocialNetworks = () => {
  return (
    <div className='el-block el-footer-social-network'>
      <h3>Suivez nous sur:</h3>
      <ul className='el-footer-list-social-network'>
        {dataFooter.map((item) => (
          <SocialNetwork image={item.img} text={item.text} link={item.link} />
        ))}
      </ul>
    </div>
  )
}
export default SocialNetworks

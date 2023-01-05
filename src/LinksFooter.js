import { Link } from 'react-router-dom'
import { dataLinks } from './dataLinks'
export const LinksFooter = () => {
  return (
    <div className=' el-block el-footer-links'>
      <ul>
        {dataLinks.map((item) => (
          <li>
            <Link to={item.link} className = 'el-link'>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

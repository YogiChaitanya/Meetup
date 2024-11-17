import {Link} from 'react-router-dom'
import {HeaderContaienr, WebsiteLogo} from './styledComponents'

const Header = () => (
  <HeaderContaienr>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderContaienr>
)

export default Header

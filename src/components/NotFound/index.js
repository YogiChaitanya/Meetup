import {
  NotFoundContainer,
  NotFoundImg,
  Heading,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Paragraph>
      We are sorry, the page you requested could not be found
    </Paragraph>
  </NotFoundContainer>
)

export default NotFound

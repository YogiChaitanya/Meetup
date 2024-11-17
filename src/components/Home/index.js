import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeContainer,
  HomeCard,
  Heading,
  Paragraph,
  RegisterBtn,
  MeetupImg,
} from './styledComponents'

const Home = props => {
  const onClikcRegisterBtn = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)

        return (
          <>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <HomeCard>
                  <Heading color="#2563eb">Hello {name}</Heading>
                  <Paragraph>Welcome {topic}</Paragraph>

                  <MeetupImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </HomeCard>
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeCard>
                  <Heading>Welcome to Meetup</Heading>
                  <Paragraph>Please register for the topic</Paragraph>
                  <Link to="/register">
                    <RegisterBtn onClick={onClikcRegisterBtn} type="button">
                      Register
                    </RegisterBtn>
                  </Link>

                  <MeetupImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </HomeCard>
              </HomeContainer>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home

import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  RegisterContainer,
  RegisterCard,
  WebsiteRegisterImg,
  FormControl,
  Heading,
  LabelName,
  NameInputField,
  SelectTabInputField,
  Option,
  RegisterNowBtn,
  ErrorMessage,
} from './styledComponents'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// doubt1
// i am not getting how to write onSubmitEvent method
// return(
// const {eventDetails} = props
// const  {
// name,
//  activeTopicId,
// } = eventDetails
//  )

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitEvent = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeNameInput = event => {
        changeName(event)
      }

      const onChangeTopicId = event => {
        changeTopic(event)
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <RegisterCard>
              <WebsiteRegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />

              <FormControl onSubmit={onSubmitEvent}>
                <Heading>Let us join</Heading>
                <LabelName htmlFor="nameId">NAME</LabelName>
                <NameInputField
                  id="nameId"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={onChangeNameInput}
                />

                <LabelName htmlFor="topicId">Topics</LabelName>
                <SelectTabInputField
                  id="topicId"
                  value={topic}
                  onChange={onChangeTopicId}
                >
                  {topicsList.map(eachItem => (
                    <Option value={eachItem.id} key={eachItem.id}>
                      {eachItem.displayText}
                    </Option>
                  ))}
                </SelectTabInputField>

                <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
                {showError === true ? (
                  <ErrorMessage>Please enter your name</ErrorMessage>
                ) : (
                  ''
                )}
              </FormControl>
            </RegisterCard>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register

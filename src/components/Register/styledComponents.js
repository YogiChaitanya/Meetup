import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RegisterCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const WebsiteRegisterImg = styled.img`
  width: 60%;
`
export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
`
export const LabelName = styled.label`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 10px;
`

export const NameInputField = styled.input`
  height: 40px;
  color: #7b8794;
  border: 1px solid #7b8794;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
`

export const SelectTabInputField = styled.select`
  height: 40px;
  color: #7b8794;
  border: 1px solid #7b8794;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
`

export const Option = styled.option`
  color: #334155;
  font-family: Roboto;
`

export const RegisterNowBtn = styled.button`
  color: #ffffff;
  padding: 10px;
  background-color: #2563eb;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 10px;
`

import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  padding: 25px;
  width: 45%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: Bold;
  font-size: 32px;
  color: #f8fafc;
  margin-bottom: 20px;
`
export const ImgElement = styled.img`
  width: 100%;
  height: 300px;
`

export const TextContainer = styled.div`
  background-color: #25262c;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  width: 50%;
  margin-left: 25px;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
`
export const ListItem = styled.li``

export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.fontHighlight};
  font-weight: ${props => props.fontWeight};
`
export const UnderLineBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const BoldBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const ItalicBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

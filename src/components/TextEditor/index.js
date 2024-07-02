import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  SubContainer,
  Container,
  Heading,
  ImgElement,
  TextContainer,
  ListContainer,
  ListItem,
  HrElement,
  TextArea,
  BoldBtn,
  ItalicBtn,
  UnderLineBtn,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToOutline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  onClickOutline = () => {
    this.setState(prevState => ({textToOutline: !prevState.textToOutline}))
  }

  render() {
    const {textToBold, textToItalic, textToOutline} = this.state

    const color = textToBold === false ? '#f1f5f9' : '#faff00'

    const italicColor = textToItalic === false ? '#f1f5f9' : '#faff00'

    const underLineColor = textToOutline === false ? '#f1f5f9' : '#faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const fontHighlight = textToOutline === false ? 'normal' : 'underline'
    return (
      <BgContainer>
        <SubContainer>
          <Container>
            <Heading>Text Editor</Heading>
            <ImgElement
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Container>
          <TextContainer>
            <ListContainer>
              <ListItem>
                <BoldBtn
                  data-testid="bold"
                  type="button"
                  color={color}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </BoldBtn>
              </ListItem>
              <ListItem>
                <ItalicBtn
                  data-testid="italic"
                  type="button"
                  color={italicColor}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </ItalicBtn>
              </ListItem>
              <ListItem>
                <UnderLineBtn
                  data-testid="underline"
                  type="button"
                  color={underLineColor}
                  onClick={this.onClickOutline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderLineBtn>
              </ListItem>
            </ListContainer>
            <HrElement />
            <TextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              fontHighlight={fontHighlight}
            />
          </TextContainer>
        </SubContainer>
      </BgContainer>
    )
  }
}

export default TextEditor

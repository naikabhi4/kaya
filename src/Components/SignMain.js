
import {  Col, Container, Row } from 'react-bootstrap'
import "./styles/SignMain.css"
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';




function SignMain() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
}

    return (
        <Container className="signmain">
        <Row className="info">
          <Col className="text">
           <h1>Lorem ipsum dolor sit amet, consectetur eiusmod?</h1>
           <p>Sed ut perspiciatis unde omnis iste natus error laudantium, totam rem aperiam</p>
           <Button onClick={signIn} size="small" className="button" variant="contained" bgColor="white">Start Diaganosis  </Button>
          </Col>
          <Col className="image">
             <img src="https://s3-alpha-sig.figma.com/img/9d5b/29c8/67de38e2b09d02571d8161e7c503415a?Expires=1620000000&Signature=fTMSc1cDBzW3b0O6mRe0fWrqE4gYIxyCNdnvfCj7FhkNbWbUXdWf-Bh3CwUxXNLbu3EimtR0MBtA-BWiv7w9ghEmqOtAwQ0GNPN5IpOV8HzHvls5SrdDslMIpiWAL1GOEdqntPIxKu6Q68MnNAWpKjFI8SiMhJE2IogAeCb~RovR~-rqmKIE-1jyCo46IoHUcxZo-RvZW9rfb6n7FYTKUDl47m7rf3fzbdXaKhzX6mvZV6UiypzeuPISBVBHewmg9IgYg4bJbu1W1YpQiVErqX7HuQlyLisj~~Plbjno4eEpYqE4sNim1m05yXPiLbcyHmFSn3tkEpaI0nyWiWJXUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""/>
          </Col>
        </Row>
        </Container>
    )
}

export default SignMain

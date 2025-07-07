import Messenger from './component/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {
  const clientId='791420579034-nd8kd1m1rt2ujd3322hckj4783ggahsc.apps.googleusercontent.com'
  return (
    
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

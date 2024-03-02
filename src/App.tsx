import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, chatbox, helpCircle, peopleCircle, menu } from 'ionicons/icons';
import Home from './pages/Home';
import Inbox from './pages/Inbox';
import AskNow from './pages/AskNow';
import Experts from './pages/Experts';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Navbar from './components/Navbar.component';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>    
    <IonReactRouter>
       {/* <Navbar /> */}
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/inbox"><Inbox /></Route>
          <Route exact path="/askNow"><AskNow /></Route>
          <Route exact path="/experts"><Experts /></Route>          
          <Route exact path="/"><Redirect to="/home" /></Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="inbox" href="/inbox">
            <IonIcon icon={chatbox} />
            <IonLabel>Inbox</IonLabel>
          </IonTabButton>
          <IonTabButton tab="askNow" href="/askNow">
            <IonIcon aria-hidden="true" icon={helpCircle} />
            <IonLabel>Ask Now</IonLabel>
          </IonTabButton>
          <IonTabButton tab="experts" href="/experts">
            <IonIcon aria-hidden="true" icon={peopleCircle} />
            <IonLabel>Experts</IonLabel>
          </IonTabButton>                
        </IonTabBar>
        
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
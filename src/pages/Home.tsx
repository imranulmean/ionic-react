import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonRow,IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Navbar from '../components/Navbar.component';

const Home: React.FC = () => {

  return (

    <IonPage>
      <Navbar title="Home" />
      <IonContent>
        <IonRow>Hello</IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';


const Inbox: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>           
              <IonCol size="6">
                <IonImg src="https://www.flowbite-react.com/images/people/profile-picture-1.jpg" />
              </IonCol>
              <IonCol size="6">
                <IonImg src="https://www.flowbite-react.com/images/people/profile-picture-2.jpg" />
              </IonCol>           
          </IonRow>
        </IonGrid>        
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
    </IonContent>
    </IonPage>
  );
};

export default Inbox;

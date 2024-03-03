import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const AskNow: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ask Now</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='container'>
          <p>this is Ask Now Page</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AskNow;

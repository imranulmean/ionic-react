import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const Experts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Experts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='container'>
          <p>This is Experts Page</p>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Experts;

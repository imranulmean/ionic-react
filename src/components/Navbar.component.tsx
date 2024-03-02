import React, { ReactNode } from 'react';
import { IonHeader, IonToolbar, IonGrid, IonButtons, IonButton, IonTitle, IonBackButton, IonRow, IonCol } from '@ionic/react';

interface NavbarProps {
  children?: ReactNode;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, title }) => (
  <IonHeader>
    <IonToolbar>
        <IonRow>
          <IonCol size='9'>{title}</IonCol>
          <IonCol size='3'><IonButton color="dark">Login</IonButton></IonCol>
        </IonRow>
    </IonToolbar>
    {children}
  </IonHeader>
);

export default Navbar;
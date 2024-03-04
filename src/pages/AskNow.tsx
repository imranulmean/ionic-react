import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import { Label, Select } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header.component';


const AskNow: React.FC = () => {
  const filePickerRef = useRef();
  return (
    <IonPage>
       <Header pageTitle={"Ask Now"}/>
      <IonContent>
          <div className="w-full mb-4 py-3">
            <div className="mb-2 flex items-center justify-center">
              <Label htmlFor="countries" value="Ask A Question" />
            </div>
          <Select id="countries" required>
            <option>Expert Categories</option>
            <option>Engineer</option>
            <option>Doctor</option>
            <option>Lawyer</option>
            <option>Securit Expert</option>
          </Select>      
        </div>
        <div className="relative">
          <textarea className="w-full px-3 py-2 border rounded-md h-[400px]" placeholder="Type here..."></textarea>
          <div className="absolute bottom-[50px] left-[5px]" onClick={() => filePickerRef.current.click()}>
          <input
            type='file'
            accept='image/*'
            ref={filePickerRef}
            hidden
          />
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 18V8c0-.6.4-1 1-1h1.5l1.7-1.7c.2-.2.4-.3.7-.3h6.2c.3 0 .5.1.7.3L17.5 7H19c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Z"/>
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg> 
          </div>
          <Button color="blue" className='w-full'>Submit</Button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AskNow;

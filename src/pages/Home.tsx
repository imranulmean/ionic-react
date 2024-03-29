import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';
import moment from 'moment';
import { IonContent,IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,IonRow,IonCol,   IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonText } from '@ionic/react';
import Navbar from '../components/Navbar.component';
import Header from '../components/Header.component';

const Home: React.FC = () => {
  const experts=[
    {name:"Neil Sims", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75",ratings:[1,2,3,4], reviews:'90,000', filled:true },
    {name:"Bonnie Green", post:"Urologist", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'8,000', filled:false },
    {name:"Michael Gough", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'16,000', filled:true},
    {name:"Lana Byrd", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'25,000', filled:true},
    {name:"Thomes Lean", post:"Lawyer", profilePic:"https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=32&q=75", ratings:[1,2,3,4], reviews:'5,000', filled:false},
];
  return (
    <IonPage>
      <IonContent>
      <Header pageTitle={'Home'} />
      <h3 className='text-black text-md font-bold  p-2'>My Questions</h3>
          <Card className="full-width mb-10">
              <div className="flow-root">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                      <div className='flex flex-col justify-center'>
                          <li className="py-3 sm:py-4">
                              <div className='flex'>
                                  <div className='flex-1'>
                                          <div className="flex items-center space-x-4">
                                          <div className="shrink-0">
                                              <img
                                              alt="Neil image"
                                              height="32"
                                              src={experts[0].profilePic}
                                              width="32"
                                              className="rounded-full"
                                              />
                                          </div>
                                          <div className="min-w-0 flex-1">
                                              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{experts[0].name}</p>
                                              <p className="truncate text-sm text-gray-500 dark:text-gray-400">Canada Law | {moment(new Date().toISOString()).format('MMM D, h:mm a')}</p>
                                              <Rating>
                                                  {experts[0].ratings.map(r=>{
                                                      return(
                                                      <>
                                                          <Rating.Star />                                            
                                                      </>
                                                      )                                          
                                                  })}
                                                  <Rating.Star filled={experts[0].filled} />                                                
                                              </Rating>                                
                                          </div>
                                      </div>
                                      <p>Hi</p>
                                      <p>I understand you are looking for a solution</p>
                                  </div>
                                  <div className='flex items-center justify-center'>
                                      <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                      </svg>                                                    
                                  </div>
                              </div>
                              
                          </li>   
                      </div>                    
                  </ul>                
              </div>                    
          </Card>
          <Card className="w-full">
              <div className='border-b-2 p-3'>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Q1
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>                    
              </div>
              <div className='border-b-2 p-3'>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Q2
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>                    
              </div> 
              <div className='border-b-2 p-3'>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Q3
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>                    
              </div>                                    
          </Card>
        </IonContent>        
    </IonPage>
  );
};

export default Home;

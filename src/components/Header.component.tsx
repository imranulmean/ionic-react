import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun, FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';


export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
  
  const [userProfile, setUserProfile]= useState(null);
  console.log(location);

//   useEffect(()=>{
    
//       const fetchUserProfile=async ()=>{
//         const res= await fetch(`https://api-24f4009b4204.edgeflare.io/user_profiles?id=eq.${keycloak.subject}`);
//         const data=await res.json();
//         console.log(data[0]);
//         setUserProfile(data[0]);
//     }    
//     fetchUserProfile();
//   },[keycloak.authenticated]);

  return (
    // <Navbar className={`border-b-2 border-none ${location.pathname==="/" ? "bg-black" : ""}`}>
    <Navbar className='border-b-2'>  
      <div className="flex md:order-2">          
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">John{" "}Doe</span>
              <span className="block truncate text-sm font-medium">Boss</span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>My Benifits</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Privacy Policy</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item >How it Works</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item >Send Feedback</Dropdown.Item>
            <Dropdown.Divider />                                    
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          
          <Button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-1 py-1 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
            Login
          </Button>
        
      </div>          
    </Navbar>   
    
  );
}

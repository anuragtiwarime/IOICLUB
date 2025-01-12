import React from 'react';
import Ankit from '../assets/ankit.jpg';
import { FaLinkedin } from 'react-icons/fa';
import Man from '../assets/man.webp'
import Woman from '../assets/women.jpeg'

const TechnologyPage = () => {
 const students = [
     {
       name: 'Ankit Raj',
       city: 'Hazaribagh',
       state: 'Jharkhand',
       photo: Ankit,
       linkedIn: 'https://www.linkedin.com/in/ankitraj061',
     },
     {
       name: 'Anuj Kumar',
       city: 'Varanasi',
       state: 'Uttar Pradesh',
       photo: Man,
       linkedIn: 'https://www.linkedin.com/in/anuj-kum',
     },
     {
       name: 'Umesh Sharma',
       city: 'Mathura',
       state: 'Uttar Pradesh',
       photo: Man,
       linkedIn: 'https://www.linkedin.com/in/',
     },
   
     {
      name :"Aarushi Mandloi",
      city :"Bangalore",
      state :"Karnataka",
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"

     },
     {
      name :"Aditya Prakash Singh",
      city :'xyz',
      state:'xyz',
      photo:Man,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Ali Sarim",
      city :'xyz',
      state:'xyz',
      photo:Man,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Alok Kumar",
      city :'xyz',
      state:'xyz',
      photo:Man,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Amaan Qureshi",
      city :'xyz',
      state:'xyz',
      photo:Man,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Aman Kumar",
      city :'xyz',
      state:'xyz',
      photo:Man,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Aman Sharma",
      city :'xyz',
      state:'xyz',
      photo:Man,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Ambika Malgaya",
      city :'Khargone',
      state:'Madhya Pradesh',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Amit Dole",
      city :'Akola',
      state:'Maharashtra',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Aniket Rana",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Ankan Kushwaha",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Anmol Vishisht",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Ansh Raj Shukla",
      city :'Gulab Nagar',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Arpit Tiwari",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Arpit",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Arya Bhattacharjee",
      city :'Bardwan',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Aryan Singh",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Ashish Kumar Jha",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name :"Ashutosh Kumar",
      city :'xyz',
      state:'xyz',
      photo:Woman,
      linkedIn:"https://www.linkedin.com/in/aarushi-mandloi-4b3b6b1a3"
     },
     {
      name: "Ashutosh Rai",
      city: "Seoni",
      state: "Madhya Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Atul Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Avinash Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Avirath V Pawar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ayush Chaurasiya",
      city: "Chhindwara",
      state: "Madhya Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ayush Kumar Sagar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ayushi Chourasia",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Badri Gupta",
      city: "Kanpur",
      state: "Uttar Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Chirag Dubey",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Devansh Garg",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Dhruv",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Esha Bajaj",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ganesh Agarwal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Harjinder Singh",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Harshika Malhotra",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Harshvardhan Harshvardhan",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Hitesh Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Janvi Yadav",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Kamlesh Yadav",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Kartik Mishra",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Kaushik Chakraborty",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Keesari Uday Reddy",
      city: "Meerpet",
      state: "Telangana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Khushi Yadav",
      city: "Deoria",
      state: "Uttar Pradesh",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Krish Gupta",
      city: "Burhanpur",
      state: "Madhya Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Krishna Jain",
      city: "Dausa",
      state: "Rajasthan",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Manish Kumar Jha",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Manu Kumar",
      city: "Siwan",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Masum Aktar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mayank Wanjari",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Md Kashif Alam",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mohammad Irfan",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mohammed Yaseen",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mohit Jangir",
      city: "Sikar",
      state: "Rajasthan",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Naina Dugar",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Nakkala Karthik",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Nandini Bais",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Naresh Rajput",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Nimish Agrawal",
      city: "Nayaganj",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Niraj Roy",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Nirmal Goyal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Om Thombre",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Omkar Mali",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Parvez Khan",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Pawan Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Prakhar Chaudhary",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Pranjal Singh",
      city: "Jaunpur",
      state: "Uttar Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Pratik Waghral",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rahul Prajapat",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rahul Swain",
      city: "Ganjam",
      state: "Odisha",  
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Raushan Kumar Jha",
      city: "Darbhanga",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rishab Singh",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rishi Patel",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Riyanshi Tomar",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rohit Lamba",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ronak Jain",
      city: " Bangalore",
      state: "Karnataka",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ronit Khandelwal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Roshan Mandal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Roushan Gupta",
      city: "Munger",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rudra Purohit",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rutika Gupta",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rushikesh Bankar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ruturaj Biswal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sacchidanand Pandey",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sairaj Shelar",
      city: "Pune",
      state: "Maharashtra",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Saiyam Kumar",
      city: "Shakti Nagar",
      state: "",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Samaksh Undirwade",
      city: "Gandhi Nagar",
      state: "Maharashtra",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Samruddhi Gujarathi",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sanskriti Dutta",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Saurabh Ray",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sharad Singh",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Shilpi Tripathi",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Siddharth Dubey",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sonal Sonal",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sonar",
      city: "Rampur",
      state: "Uttar Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sriram Sriram",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sujal Jain",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sumit Singh Yadav",
      city: "Jhunjhunu ",
      state: "Rajasthan",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sumit Singh Singh",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Tamanna Mohammed Meera",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Tanish Panchal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Tarun Chaudhary",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Udhay Nayyar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Umar Ahamed",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vageesha Verma",
      city: "Varanasi",
      state: "Uttar Pradesh",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vaishnavi Tyagi",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vansh Sahu",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vedant Bharadkar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vivek Kumar Roy",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Voddam Karthik",
      city: "Jagital",
      state: "Telangana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Yash Mohite",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Yatharth Singh",
      city: "Sultanpur",
      state: "Uttar Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Yugang Baghel",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Yuvraj Satwan",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Zeeshan Meraj Ansari",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Abhi Rai",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Abhishek Choudhary",
      city: "Jaipur",
      state: "Rajasthan",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Abhishek Tiwari",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Anshu Kumar",
      city: "Rohtas",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Bhavishya Verma",
      city: "Jhunjhunu",
      state: "Rajasthan",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Hamza Mirza",
      city: "Kanpur",
      state: "Uttar Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Hariom Vishvkarma",
      city: "Rajgarh",
      state: "Madhya Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Kapil",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Madhumitha Ramanathan",
      city: "Bangalore",
      state: "Karnataka",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Magham Rakeshreddy",
      city: "Siddipet",
      state: "Telangana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Manas Panika",
      city: " Raigarh",
      state: "Chhattisgarh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Manash Swain",
      city: "Puri",
      state: "Odisha",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Manish",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Manish Keshri",
      city: "Hazaribagh",
      state: "Jharkhand",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mayank Saini",
      city: "Faridabad",
      state: "Haryana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Md.Shaquib",
      city: "Kathatrawn",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mojiz Abbas",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Mohammad Munaf",
      city: "Siddipet",
      state: "Telangana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Ronak Dokania",
      city: "Jamtara",
      state: "Jharkhand",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Charan",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Patan Nazneen",
      city: "Annamaya",
      state: "Andhra Pradesh",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Prashant Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rajan Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Rohit Gurjar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sakshi",
      city: "xyz",
      state: "xyz",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sayan Das",
      city: "Parganas",
      state: "West Bengal",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Nihal",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Shashi Shanthan",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Snuhith Goud",
      city: "Warangal",
      state: "Telangana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sohana Parveen",
      city: "Murshidabad",
      state: "West Bengal",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Souvik Biswas",
      city: "Maldah",
      state: "West Bengal",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Srakash Dhar",
      city: "Agartala ",
      state: "Tripura",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Suraj Chaudhary",
      city: "kanpur",
      state: "Uttar Pradesh",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Suraj Kumar",
      city: "Bhojpur",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Sushrut Kaviskar",
      city: "Thane",
      state: "Maharashtra",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Tejas Jyoti",
      city: "Ranebennur",
      state: "Karnataka",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vaishnavi Arjun",
      city: " Bengaluru",
      state: "Karnataka",
      photo: Woman,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Vikash Yadav",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Md Osama",
      city: "Nathnagar",
      state: "Bihar",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Kundan Kumar",
      city: "xyz",
      state: "xyz",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Md Irfan",
      city: "Siddipet",
      state: "Telangana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    },
    {
      name: "Suyash Dubey",
      city: "Faridabad",
      state: "Haryana",
      photo: Man,
      linkedIn: "https://www.linkedin.com/in/random-id"
    }





   ];
 
   return (
     <div className="pt-24 px-4 max-w-7xl mx-auto">
       <h1 className="text-3xl font-bold text-black mb-8 text-center">Our SOT Students</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {students.map((student, index) => (
           <a
             key={index}
             href={student.linkedIn}
             target="_blank"
             rel="noopener noreferrer"
             className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105"
           >
             <img
               src={student.photo}
               alt={student.name}
               className="w-32 h-32 rounded-full mb-4"
             />
             <div className="flex items-center justify-center gap-2">
               <p className="text-xl font-semibold">{student.name}</p>
               <FaLinkedin
                 className="text-black text-xl hover:text-gray-800 transition-colors"
                 title="LinkedIn Profile"
               />
             </div>
             <p className="text-gray-700">{student.city}, {student.state}</p>
           </a>
         ))}
       </div>
     </div>
   );
 };

export default TechnologyPage;

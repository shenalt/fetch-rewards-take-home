import Head from 'next/head';
import Image from 'next/image';
import { HomePageStyles, FormStyles, ImgContainer } from '@/styles/HomeStyles';
import { useState, useEffect } from 'react';
import fetchLogo from '../public/fetch-logo.png';
import { toast } from 'react-hot-toast';
const {motion} = require('framer-motion');

// Animation Variants
const input = {
  hidden: { opacity: 0, scale: 0.25 },
  show: { opacity: 1, scale: 1 },
};

const inputs = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
          delayChildren: 0.5,
          staggerChildren: 0.1,
      },
  },
};

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  // get and store data for selections in data
  useEffect(() => {
    setLoading(true)
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p></p>
  if (!data) return <p>No data</p>

  // Store the data in variables to use for the selections
  const occupations = data.occupations;
  const states = data.states;  

  // Create a toast
  const notify = (isSuccess) => {
    if(isSuccess){
      toast.success("Form Successfully Submitted!");
    }
    else{
      toast.error("Something Went Wrong!");
    }
  }
  
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.pswrd.value,
      occupation: event.target.occupation.value,
      state: event.target.state.value
    }
    
    // Send the data to the server in JSON format
    const JSONdata = JSON.stringify(data)
    
    // API endpoint where we send form data
    const endpoint = 'https://frontend-take-home.fetchrewards.com/form'

    // Form the request for sending data to the server
    const options = {
      method: 'POST',
      // Tell the server we're sending JSON
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above
      body: JSONdata,
    }
    // Send the form data to fetch form API and get a response
    const response = await fetch(endpoint, options)
    // If POST successful, show success toast
    if(response.status === 201){
      notify(true);
    }
    else {
      notify(false);
    }
    // Reset the form inputs
    document.getElementById("fetch-form").reset();
  }

  return (
    <>
      <Head>
        <title>Fetch Rewards</title>
        <meta name="description" content="Fetch Rewards form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend&family=Syne&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePageStyles variants={inputs} initial="hidden" animate="show">
          <ImgContainer variants={input}>
            <Image src={fetchLogo} alt="Fetch Logo"></Image>
          </ImgContainer>
          <FormStyles method="post" onSubmit={handleSubmit} id="fetch-form"> 
            <motion.label htmlFor='name' variants={input}>Full Name</motion.label>
            <motion.input 
              type="text" 
              name="name" 
              id='name'
              className='text-inputs'
              variants={input}
              required 
            />

            <motion.label htmlFor="email" variants={input}>Email</motion.label>
            <motion.input 
              type="email" 
              name="email" 
              id='email'
              className='text-inputs'
              variants={input}
              required 
            />

            <motion.label htmlFor="pswrd" variants={input}>Password</motion.label>
            <motion.input 
              type="password" 
              name="pswrd" 
              id='pswrd'
              className='text-inputs'
              variants={input}
              required 
            />

            <motion.label htmlFor="occupation" variants={input}>Occupation</motion.label>
            <motion.select 
              placeholder='Pick an occupation...'
              name='occupation'
              className='select-inputs'
              variants={input}
              required
            >
              {occupations.map((occupation, index) => (
                <option key={index} value={`${occupation}`}>{occupation}</option>
              ))}
            </motion.select>

            <motion.label htmlFor="state" variants={input}>State</motion.label>
            <motion.select 
              placeholder='Pick a state...'
              name='state'
              className='select-inputs'
              variants={input}
              required
            >
              {states.map((state) => (
                <option key={state.abbreviation} value={`${state.name}`}>{state.name}</option>
              ))}
            </motion.select>
            
            <motion.input 
              value="Submit" 
              type="submit" 
              className='submitBtn' 
              variants={input}
            />
          </FormStyles>
        </HomePageStyles>
    </>
  )
}

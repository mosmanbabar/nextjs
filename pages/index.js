import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div>
      <h1>Learn NExt Js </h1>
      <p>Home page</p>
    </div>
    </>
  )
}

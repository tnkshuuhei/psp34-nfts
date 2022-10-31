import Image from 'next/image'
//import Button from '../component/Button'
import Header from '../component/Header'
//import styles from '../styles/Home.module.css'
import { ConnectContext } from '../context/ConnectProvider'
import { useContext } from 'react'

export default function Home() {
	const { connectWallet, currentAccount, api } = useContext(ConnectContext)
	return (
		<div>
			<Header />
			<div >
			</div>

		</div>
	)
}

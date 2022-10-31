import Head from 'next/head'
import Image from 'next/image'
import Button from '../component/Button'
import styles from '../styles/Home.module.css'
import { ConnectContext } from '../context/ConnectProvider'
import { useContext } from 'react'
export default function Home() {
	const { connectWallet, currentAccount, api } = useContext(ConnectContext)
	return (
		<div className={styles.container}>
			<div onClick={() => connectWallet()}>
				<Button></Button>
			</div>
			<div className={styles.footer}
				onClick={() => connectWallet()}>
				<span className={styles.logo}>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</div>
		</div>
	)
}

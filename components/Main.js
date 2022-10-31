import { RiSettings3Fill } from 'react-icons/ri'
import { useContext, useState } from 'react'
import Button from './Button'
import { ConnectContext } from '../context/ConnectProvider'
import { ABI, CONTRACT_ADDRESS } from './constants'
import { ContractPromise } from '@polkadot/api-contract'

const style = {
	wrapper: `w-screen flex items-center justify-center mt-14`,
	content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
	formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
	transferPropContainer: `bg-[#20242A] my-4 rounded-2xl p-4 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
	transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
}
const Main = () => {

	const { connectWallet, currentAccount, api } = useContext(ConnectContext)
	const [Name, setName] = useState();
	const [Image, setImage] = useState();
	const [Description, setDescription] = useState();
	const gasLimit = -1;
	const account = currentAccount

	const setupContract = async () => {
		try {
			const psp34 = new ContractPromise(api, ABI, CONTRACT_ADDRESS);
			const { web3FromSource } = await import("@polkadot/extension-dapp");
			const injector = await web3FromSource(account.meta.source);
			console.log(psp34.tx)
			//const mintExtrinsic = await psp34.tx.mintToken({ gasLimit });
			//console.log(mintExtrinsic)
			/**
			mintExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
				if (status.isInBlock) {
					console.log(`Completed at block hash #${status.asInBlock.toString()}`);
				} else {
					console.log(`Current status: ${status.type}`);
				}
			}) */
		} catch (error) {
			console.log(':( transaction failed', error);
		}
	}
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.formHeader}>
					<div>Setup</div>
					<div>
						<RiSettings3Fill />
					</div>
				</div>
				<div className={style.transferPropContainer}>
					<input
						type='file'
						className={style.transferPropInput}
						placeholder='Upload Image File for NFT'
						onChange={e => setImage(e.target.value)}
					/>
				</div>
				<div className={style.transferPropContainer}>
					<input
						type='text'
						className={style.transferPropInput}
						placeholder='NFTs Name'
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className={style.transferPropContainer}>
					<input
						type='text'
						className={style.transferPropInput}
						placeholder='Description'
						onChange={e => setDescription(e.target.value)}
					/>
				</div>
				<div onClick={() => setupContract()}>
					<Button title='Mint' />
				</div>
			</div>

		</div>
	)
}
export default Main
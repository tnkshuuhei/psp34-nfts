import { RiSettings3Fill } from 'react-icons/ri'
import { useContext, useState } from 'react'
import Button from './Button'
import { ConnectContext } from '../context/ConnectProvider'
import { ABI, CONTRACT_ADDRESS } from '../lib/constants'
//import {wasm} from '../lib/psp34_contract.wasm'
import { CodePromise, ContractPromise } from '@polkadot/api-contract'

const style = {
	wrapper: `h-screen w-screen flex items-center justify-center mt-14`,
	content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
	formHeader: `cursor-pointer px-2 flex items-center justify-between font-semibold text-xl`,
	transferPropContainer: `bg-[#20242A] my-4 rounded-2xl p-4 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
	transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
	inactivetab: ` text-gray-600 inline-block p-4 rounded-t-lg hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300`,
	activetab: `bg-[#191B1F]`,
}
const Main = () => {
	const { currentAccount, api } = useContext(ConnectContext);
	const [activeTab, setActiveTab] = useState('collection');
	const [Name, setName] = useState();//todo
	const [Image, setImage] = useState();//todo
	const [Description, setDescription] = useState();//todo
	const date = '2022/11/01'//todo
	const cid = '' //todo
	const [collectionName, setCollectionName] = useState();//todo
	const [symbol, setSymbol] = useState()//todo
	const gasLimit = 18750000000;
	const storageDepositLimit = null

	const setupContract = async () => {
		try {
			await api.isReady
			const psp34 = new ContractPromise(api, ABI, CONTRACT_ADDRESS);
			const { web3FromSource } = await import("@polkadot/extension-dapp");
			const injector = await web3FromSource(currentAccount.meta.source);
			const mintExtrinsic = await psp34.tx.mintWithAttribute({ gasLimit }, Name, currentAccount, date, cid);

			mintExtrinsic.signAndSend(currentAccount.address, { signer: injector.signer }, ({ status }) => {
				if (status.isInBlock) {
					console.log(`Completed at block hash #${status.asInBlock.toString()}`);
				} else {
					console.log(`Current status: ${status.type}`);
				}
			})
		} catch (error) {
			console.log(':( transaction failed', error);
		}
	}
	//todo
	{/**
  const CreateCollection = async () => {
    try {
      await api.isReady
      const { web3FromSource } = await import("@polkadot/extension-dapp");
      const injector = await web3FromSource(currentAccount.meta.source);
      const code = new CodePromise(api, ABI, wasm);
      const initValue = 1;
      const createcollection = code.tx.new({ gasLimit, storageDepositLimit }, initValue)

      createcollection.signAndSend(currentAccount.address, { signer: injector.signer }, ({ status }) => {
        if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`);
        } else {
          console.log(`Current status: ${status.type}`);
        }
      })
    } catch (error) {
      console.log(':( transaction failed', error);
    }
  } */}
	return (
		<div className={style.wrapper}>
			<div className={style.content}>
				<div className={style.formHeader}>
					<div className={`${style.activetab} ${activeTab !== 'collection' && style.inactivetab}`} onClick={() => setActiveTab('collection')}>Create Collection</div>
					<div className={`${style.activetab} ${activeTab !== 'mint' && style.inactivetab}`} onClick={() => setActiveTab('mint')}>Mint NFTs</div>
					<div>
						<RiSettings3Fill />
					</div>
				</div>
				{activeTab === 'collection' ? (
					<div>
						Collection Name
						<div className={style.transferPropContainer}>
							<input
								type='text'
								className={style.transferPropInput}
								placeholder='e.g. Bored Ape Yacht Club'
								onChange={e => setCollectionName(e.target.value)}
							/>
						</div>
						Symbol
						<div className={style.transferPropContainer}>
							<input
								type='text'
								className={style.transferPropInput}
								placeholder='e.g. BAYC'
								onChange={e => setSymbol(e.target.value)}
							/>
						</div>
						<div onClick={() => CreateCollection()}>
							<Button title='Create' />
						</div>
					</div>
				) : (
					<div>
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
				)}
			</div>
		</div>
	)
}
export default Main
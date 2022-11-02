import { RiSettings3Fill } from 'react-icons/ri'
import { useContext, useEffect, useRef, useState } from 'react'
import Button from './Button'
import { ConnectContext } from '../context/ConnectProvider'
import { ABI, CONTRACT_ADDRESS } from '../lib/constants'
import { CodePromise, ContractPromise } from '@polkadot/api-contract'
import { NFTStorage, File } from 'nft.storage'
import Image from 'next/image'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { NFT_STORAGE_KEY } from '../APIKey'
import LoadingTransaction from './LoadingTransaction'

Modal.setAppElement('#__next')

const style = {
	wrapper: `h-screen w-screen flex items-center justify-center mt-14`,
	content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
	formHeader: `cursor-pointer px-2 flex items-center justify-between font-semibold text-xl`,
	transferPropContainer: `bg-[#20242A] my-4 rounded-2xl p-4 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
	transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
	inactivetab: ` text-gray-600 inline-block p-4 rounded-t-lg hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300`,
	activetab: `bg-[#191B1F]`,
	Image: `block m-auto shadow`,
	upload: `block m-auto mt-5 shadow px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150`,
}

const Main = () => {
	const gasLimit = 18750000000;
	const storageDepositLimit = null
	const day = new Date();
	const today = day
		.toISOString()
		.replace('T', '-')
		.slice(0, -8);

	const [isLoading, setIsLoading] = useState(false)
	const [blockhash, setBlockHash] = useState('');
	const router = useRouter()
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#0a0b0d',
			padding: 0,
			border: 'none',
		},
		overlay: {
			backgroundColor: 'rgba(10, 11, 13, 0.75)',
		},
	}
	useEffect(() => {
		if (isLoading) {
			router.push(`/?loading=${currentAccount}`)
		} else {
			router.push(`/`)
		}
	}, [isLoading])

	const fileUpload = () => {
		console.log(inputRef.current);
		inputRef.current.click();
	};
	const { currentAccount, api } = useContext(ConnectContext);
	const [activeTab, setActiveTab] = useState('collection');
	const inputRef = useRef(null);

	const [base64, setBase64] = useState(null);
	const [image, setImage] = useState();//todo
	const [name, setName] = useState('');//todo
	const [description, setDescription] = useState('');
	const [cid, setCid] = useState(''); //todo
	const [blob, setBlob] = useState(null);
	const [fileName, setFileName] = useState(null);
	const [type, setType] = useState(null);
	const date = today
	const [collectionName, setCollectionName] = useState();//todo
	const [symbol, setSymbol] = useState()//todo

	const select = (e) => {
		const file = e.target.files[0];
		console.log(file);
		if (file) {
			readAsBlob(file);
			readAsBase64(file);
			setType(file.type);
			setFileName(file.name);
		}
	};

	const readAsBlob = (file) => {
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = () => {
			console.log(reader.result);
			setBlob(reader.result);
		};
	};

	const readAsBase64 = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			console.log(reader.result);
			setBase64(reader.result);
		};
	};

	const nftStorage = new NFTStorage({
		token: NFT_STORAGE_KEY,
	});

	const store = async (name, description, data, fileName, type) => {
		const metadata = await nftStorage.store({
			name,
			description,
			image: new File([data], fileName, { type }),
		});
		return metadata;
	};

	const setupContract = async () => {
		try {
			setIsLoading(true)
			//////////////////////////////////
			const metadata = await store(name, description, blob, fileName, type);
			const inputUrl = metadata.url.replace(/^ipfs:\/\//, "");
			//////////////////////////////////
			const psp34 = new ContractPromise(api, ABI, CONTRACT_ADDRESS);
			const { web3FromSource } = await import("@polkadot/extension-dapp");
			const injector = await web3FromSource(currentAccount.meta.source);
			console.log(inputUrl);
			const mintExtrinsic = await psp34.tx.mintWithAttribute({ gasLimit }, name, currentAccount, date, inputUrl);
			mintExtrinsic.signAndSend(currentAccount.address, { signer: injector.signer }, ({ status }) => {
				if (status.isInBlock) {
					setBlockHash(`Completed at block hash #${status.asInBlock.toString()}`)
					console.log(`Completed at block hash #${status.asInBlock.toString()}`)
					setIsLoading(false)
				} else {
					console.log(status.type)
				}
			})//Todo if canceled, setisLoading(false)
		} catch (error) {
			setIsLoading(false)
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
						<div>
							Upload Image
							<div>
								<input
									hidden
									ref={inputRef}
									type='file'
									accept='image/*'
									placeholder='Upload Image File for NFT'
									onChange={select}
								/>
								{base64 ? (
									<Image
										src={base64}
										alt="hoge"
										className={style.Image}
										width={250}
										height={250}
									/>
								) : (
									<></>
								)}
								<button onClick={fileUpload} className={style.upload}>
									Select New Photo
								</button>
							</div>
						</div>
						Name
						<div className={style.transferPropContainer}>
							<input
								type='text'
								className={style.transferPropInput}
								placeholder='Name of this NFT'
								onChange={e => setName(e.target.value)}
							/>
						</div>
						Description
						<div className={style.transferPropContainer}>
							<input
								type='text'
								className={style.transferPropInput}
								placeholder='Description of this NFT'
								onChange={e => setDescription(e.target.value)}
							/>
						</div>
						<div onClick={() => setupContract()}>
							<Button title='Mint' />
						</div>
						{/**
						{blockhash ? (
							<div>
								{blockhash}
							</div>
						) : ('')}
						 */}
					</div>
				)}
			</div>
			<Modal isOpen={!!router.query.loading} style={customStyles}>
				<LoadingTransaction />
			</Modal>
		</div>

	)
}
export default Main
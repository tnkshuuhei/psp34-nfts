import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { useState } from 'react'
import Button from './Button'

const style = {
	wrapper: `w-screen flex items-center justify-center mt-14`,
	content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
	formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
	transferPropContainer: `bg-[#20242A] my-4 rounded-2xl p-4 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
	transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,


}
const Main = () => {
	const [Name, setName] = useState();
	const [Image, setImage] = useState();
	const [Description, setDescription] = useState();
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

				<Button title='Mint' />
			</div>

		</div>
	)
}
export default Main 
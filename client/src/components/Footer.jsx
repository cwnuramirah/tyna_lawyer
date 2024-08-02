import React, { useEffect, useState } from 'react'
import { ArrowRight, CornerRightUp } from 'react-feather'
import { Link, useLocation } from 'react-router-dom'
import client from '../client'


/*
	Since this data is important and won't change frequently,
	I made a backup data in case api fetching encounters error
*/
const officeData = [
	{
		'region': 'Kuala Lumpur',
		'phone': '+603-2732 8112',
		'email': 'office@tyna.com.my',
		'address': 'B-2-1, CENTRIO Pantai Hill Park, No. 1, Jalan Pantai Murni 1, 59200 Kampung Kerinchi, Kuala Lumpur.',
	},
	{
		'region': 'Kuantan',
		'phone': '+603 2726 2725',
		'email': 'kuantan@tyna.com.my',
		'address': 'A15, Tingkat Bawah & 1, Lorong Tun Ismail 12, Sri Dagangan Bussiness Centre, 25000 Kuantan, Pahang.',
	},
	{
		'region': 'Penang',
		'phone': '+603-2732 8112',
		'email': 'penang@tyna.com.my',
		'address': 'Suite 10-04, 10th Floor, Menara KWSP, Jalan Sultan Ahmad Shah, 10050 George Town, Penang.',
	},
	{
		'region': 'Kuching',
		'phone': '+608-2233 161',
		'email': 'kuching@tyna.com.my',
		'address': 'A2 - 4, Wisma Nation Horizon, Jalan Petanak, 93740 Kuching, Sarawak.',
	},
]

const Footer = () => {
	const location = useLocation();
	const [office, setOffice] = useState([])
	const [region, setRegion] = useState('Kuala Lumpur')
	const getEachRegion = office.length !== 0 ? office.filter((item) => item.region === region)[0] : officeData.filter((item) => item.region === region)[0]
	const onSwitch = (region) => setRegion(region)

	const email = getEachRegion.email;
	const phone = getEachRegion.phone;
	const address = getEachRegion.address;

	async function getOffice() {
		const res = await client.fetch(`
			*[ _type == 'office'] {
				region,
				phone,
				email,
				address,
			}
		`)
			.then((data) => setOffice(data))
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getOffice();
	}, [])

	const findUs = () => {
		if (office.length !== 0) {

			return office.map((office, index) => (
				<li key={office.region} onClick={() => onSwitch(office.region)} >
					<h4>{office.region}</h4>
					<ArrowRight id={office.region === region ? 'activeOffice' : ''} />
				</li>
			))
		} else {
			return officeData.map((office, index) => (
				<li key={office["region"]} onClick={() => onSwitch(office["region"])} >
					<h4>{office["region"]}</h4>
					<ArrowRight id={index === region ? 'activeOffice' : ''} />
				</li>
			))
		}
	}

	return (
		<footer>
			<div className='cta' style={{ display: location.pathname === '/contact' ? 'none' : 'flex' }}>
				<h1><u><Link to="/contact" >Talk to expert about your case now</Link></u></h1>
				<p>Click <CornerRightUp /> to fill in contact form</p>
			</div>
			<div className='findUs'>
				<div>
					<p>Find Us</p>
					<ul>
						{findUs()}
					</ul>
				</div>
				<div>
					<p>Phone / Email</p>
					<ul>
						<li><h4>{phone}</h4></li>
						<li><h4>{email}</h4></li>
					</ul>
				</div>
				<div>
					<p>Address</p>
					<address>
						<h4>{address}</h4>
					</address>
				</div>
			</div>
			<div className='disclaimer'>Work of <a href='https://www.github.com/cwnuramirah'><u>Che Wan Nuramirah</u></a>. Read <u>disclaimer</u>.</div>
		</footer>
	)
}

export default Footer
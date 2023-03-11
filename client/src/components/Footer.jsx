import React, { useState } from 'react'
import { ArrowRight} from 'react-feather'

const officeData = [
	{
		'office': 'Kuala Lumpur',
		'phone': '+603-2732 8112',
		'email': 'office@tyna.com.my',
		'address': 'B-2-1, CENTRIO Pantai Hill Park, No. 1, Jalan Pantai Murni 1, 59200 Kampung Kerinchi, Kuala Lumpur.',
	},
	{
		'office': 'Kuantan',
		'phone': '+603 2726 2725',
		'email': 'kuantan@tyna.com.my',
		'address': 'A15, Tingkat Bawah & 1, Lorong Tun Ismail 12, Sri Dagangan Bussiness Centre, 25000 Kuantan, Pahang.',
	},
	{
		'office': 'Penang',
		'phone': '+603-2732 8112',
		'email': 'penang@tyna.com.my',
		'address': 'Suite 10-04, 10th Floor, Menara KWSP, Jalan Sultan Ahmad Shah, 10050 George Town, Penang.',
	},
	{
		'office': 'Kuching',
		'phone': '+608-2233 161',
		'email': 'kuching@tyna.com.my',
		'address': 'A2 - 4, Wisma Nation Horizon, Jalan Petanak, 93740 Kuching, Sarawak.',
	},
]

const Footer = () => {

	const [office, setOffice] = useState(0)
	const onSwitch = (index) => setOffice(index)

	const email = officeData[office]['email']
	const phone = officeData[office]['phone']
	const address = officeData[office]['address']

	const findUs = officeData.map((item, index) => (
		<li key={index} onClick={() => onSwitch(index)} >
			<h4>{item['office']}</h4>
			<ArrowRight id={index === office ? 'activeOffice' : ''}/>
		</li>
	))

	return (
		<footer>
			<div>
				<p>Find Us</p>
				<ul>
					{findUs}
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
			<div>
				<p>Social Link</p>
				<ul>
					<li><h4><a href='/'>LinkedIn</a></h4></li>
					<li><h4><a href='/'>Facebook</a></h4></li>
					<li><h4><a href='/'>Twitter</a></h4></li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
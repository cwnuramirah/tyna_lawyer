import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

const Articles = () => {

	const demoPosts = Array.apply(null, Array(5)).map((index) =>
		<li className='post' key={index}>
			<p className='post_tags text--xs'>post Tags</p>
			<Link to="/blog/trust-tightrope">
				<div className='post_image'>
					<img src='/assets/jumbo-img.jpg' alt='post cover' />
				</div>
			</Link>
			<Link to="/blog/trust-tightrope">
				<h4 className='post_title'>Navigating the Trust Tightrope: A Humoruos Look at Global Business Practices</h4>
			</Link>
			<p className='post_detail'>by Arthur Author / 26 July 2024</p>
		</li>
	)

	const postsSkeleton = Array.apply(null, Array(5)).map((index) =>
		<li className='post' key={index}>
			<Skeleton className='post_tags text--xs' />
			<Skeleton className='post_image' />
			<h4 className='post_title'><Skeleton count={2} /></h4>
			<p className='post_detail'><Skeleton /></p>
		</li>
	)

	return (
		<main className='blog'>
			<header>
				<h1>News, Announcements and Publications</h1>
			</header>
			<section>
				<ul className='blog--posts'>
					{demoPosts}
				</ul>
			</section>
		</main>
	)
}

export default Articles
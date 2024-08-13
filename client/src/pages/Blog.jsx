import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import client from '../client';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';
import ChangeDocumentTitle from '../data/changeDocumentTitle';

const Blog = () => {
	const [imageLoading, setImageLoading] = useState(true);
	const [postList, setPostList] = useState([]);
	const { urlFor } = useImageUrlBuilder();

	ChangeDocumentTitle('Blog, News, Announcements and Publications')

	async function getPostList() {
		const res = await client.fetch(
			`
				*[_type == 'blog'] {
					title,
					'slug': slug.current,
					tag,
					category,
					date,
					'author': author->fullName,
					'thumbnail': thumbnail.asset._ref,
				}
			`
		)
			.then((data) => {
				data.map((post) => {
					post.thumbnail = urlFor(post.thumbnail)
					return post
				})
				setPostList(data);
			})
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getPostList();
	}, [])

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
					{
						postList.length !== 0 ?
							postList.map((post, index) =>
								<li className='post' key={index}>
									<p className='post_tags text--xs'>{post.tag}</p>
									<Link to={"/blog/" + post.slug}>
										<div className='post_image' style={{ display: imageLoading ? "none" : "flex" }}>
											<img src={post.thumbnail} alt='post cover' onLoad={() => setImageLoading(false)} />
										</div>
									</Link>
									<Skeleton className='post_image' style={{ display: imageLoading ? "flex" : "none" }} />
									<Link to={"/blog/" + post.slug}>
										<h4 className='post_title'>{post.title}</h4>
									</Link>
									<p className='post_detail'>by {post.author} / {post.date}</p>
								</li>
							)
							:
							postsSkeleton
					}
				</ul>
			</section>
		</main>
	)
}

export default Blog;
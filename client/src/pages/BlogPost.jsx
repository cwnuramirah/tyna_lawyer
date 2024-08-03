import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from '../client';
import SanityBlockContent from '@sanity/block-content-to-react';
import { useImageUrlBuilder } from '../data/useImageUrlBuilder';
import Skeleton from 'react-loading-skeleton';
import { Twitter, Facebook, Link} from 'react-feather';

const BlogPost = () => {
	const [post, setPost] = useState({});
	const { postSlug } = useParams();
	const { urlFor } = useImageUrlBuilder();
	const [imageLoading, setImageLoading] = useState(true);

	async function getPost() {

		const res = await client.fetch(
			`
				*[_type == 'blog' && slug.current == '${postSlug}'] {
					title,
					'slug': slug.current,
					tag,
					category,
					date,
					'author': author->fullName,
					'thumbnail': thumbnail.asset._ref,
					content,
				}[0]
			`
		)
			.then((data) => {
				data.thumbnail = urlFor(data.thumbnail);
				setPost(data);
			})
			.catch((err) => console.log(err))

		return res;
	}

	useEffect(() => {
		getPost();
	}, []);

	const postHeaderSkeleton =
		<header className='blogpost--header'>
			<h1 className='post_title'>
				<Skeleton style={{ opacity: '20%' }} />
				<Skeleton style={{ opacity: '20%', width: '50%' }} />
			</h1>
			<p className='post_detail'><Skeleton style={{ opacity: '20%', width: '50%' }} /></p>
		</header>;

	const postBodySkeleton =
		<section className='blogpost--body text--long'>
			<Skeleton count={4} />
			<Skeleton style={{ width: '50%' }} />
			<br />
			<Skeleton count={4} />
			<Skeleton style={{ width: '50%' }} />
		</section>

	const sharePost =
	<section className='blogpost--share'>
		Share this post: 
		<ul>
			<li><Twitter /></li>
			<li><Facebook /></li>
			<li><Link /></li>
		</ul>
	</section>

	return (
		<main className='blogpost'>
			{
				Object.keys(post).length !== 0 ?
					<>
						<header className='blogpost--header'>
							<h1 className='post_title'>{post['title']}</h1>
							<p className='post_detail'>by {post['author']} / {post['date']}</p>
						</header>
						{sharePost}
						<section className='blogpost--body'>
							<SanityBlockContent blocks={post['content']}/>
						</section>
						<section className='blogpost--cover' style={{ display: imageLoading ? "none" : "flex" }}>
							<img src={post['thumbnail']} alt={post['title']}
								onLoad={() => setImageLoading(false)} />
						</section>
						<Skeleton className='blogpost--cover' style={{ display: imageLoading ? "flex" : "none", width: '50%' }} />
						{sharePost}
					</>
					:
					<>
						{postHeaderSkeleton}
						{postBodySkeleton}
					</>
			}
		</main>

	)
}

export default BlogPost
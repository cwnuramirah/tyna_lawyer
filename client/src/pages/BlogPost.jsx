import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SanityBlockContent from '@sanity/block-content-to-react';
import Skeleton from 'react-loading-skeleton';
import { Twitter, Facebook, Link } from 'react-feather';
import Breadcrumb from '../components/Breadcrumb';
import { useImageUrlBuilder } from '../hook/useImageUrlBuilder';
import ChangeDocumentTitle from '../hook/changeDocumentTitle';
import useData from '../hook/useData';

const BlogPost = () => {
	const { postSlug } = useParams();
	const post = useData(
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
		, {})
	const { urlFor } = useImageUrlBuilder();
	const [imageLoading, setImageLoading] = useState(true);

	ChangeDocumentTitle(post['title'])

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
			<Breadcrumb crumbs={
				[
					{ link: '/blog', name: 'Blog' },
					{ link: `/${postSlug}`, name: Object.keys(post).length !== 0 ? post["title"] : "" }
				]} />
			{
				Object.keys(post).length !== 0 ?
					<>
						<header className='blogpost--header'>
							<h1 className='post_title'>{post['title']}</h1>
							<p className='post_detail'>by {post['author']} / {post['date']}</p>
						</header>
						{sharePost}
						<section className='blogpost--body'>
							<SanityBlockContent blocks={post['content']} />
						</section>
						<section className='blogpost--cover' style={{ display: imageLoading ? "none" : "flex" }}>
							<img src={urlFor(post['thumbnail'])} alt={post['title']}
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
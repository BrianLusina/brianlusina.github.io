import React, { Component } from "react";
import moment from "moment"
import PostItem from '../posts/PostItem';
import MainLayoutWrapper from "../../layouts/MainLayout";

export function withGraphQLSubscription(WrappedComponent, page){
	return class WithGraphQLData extends Component {
		constructor(props){
			super(props)
			this.state = {
				posts: [],
			}    
		}
        
		static getDerivedStateFromProps(nextProps, prevState) {
			const {
				data: {
					allMarkdownRemark: { edges: posts },
				},
			} = nextProps
    
			if (posts !== prevState.posts) {
				return {
					...prevState,
					posts,
				}
			} else {
				return null
			}
		}
    
		renderPosts(data){
			const {	allMarkdownRemark: { edges: posts }	} = data
			return posts.map(
				(
					{
						node: {
							frontmatter: {
								title,
								subtitle,
								path,
								excerpt,
								author: { avatar, link, name },
								image: { feature },
								date,
								tags,
							},
						},
					},
					index
				) => {
					const time = moment(date).format('MMMM DD, YYYY')
					return (
						<PostItem
							key={index}
							link={path}
							img={{
								src: feature,
								alt: feature,
							}}
							author={{
								name,
								avatar,
								link,
							}}
							title={title}
							subtitle={subtitle}
							date={time}
							excerpt={excerpt}
							tags={tags}
						/>
					)
				}
			)
		}
    
		render() {
			const { title, description } = page;
			return (
				<MainLayoutWrapper page={{
					title,
					description
				}}>
					<WrappedComponent renderPosts={this.renderPosts} {...this.props}/>
				</MainLayoutWrapper>
			)
		}
	}
}
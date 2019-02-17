import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo";

const IndexPage = ({data}) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			{/* <Image /> */}
			<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<h3
						css={css`
						margin-bottom: ${rhythm(1 / 4)};
						`}
					>
						{node.frontmatter.title}{" "}
						<span
							css={css`
								color: #bbb;
							`}
						>
							— {node.frontmatter.date}
						</span>
					</h3>
					<p>{node.excerpt}</p>
				</div>
			))}
		</div>
	</Layout>
);

export const query = graphql`
	query {
		allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					excerpt
				}
			}
		}
	}
`

export default IndexPage;
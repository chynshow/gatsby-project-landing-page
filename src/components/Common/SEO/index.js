import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords, image, url, author }) => {
  const {
    data: {
      siteMetadata: {
        siteDescription,
        siteTitle,
        siteImage,
        siteUrl,
        siteAuthor,
      },
    },
  } = useStaticQuery(graphql`
    {
      data: site {
        siteMetadata {
          siteDescription: description
          siteTitle: title
          siteImage: image
          siteUrl
          twitterUsername
          siteAuthor: author
        }
      }
    }
  `)
  const metaDescription = description || siteDescription
  const metaTitle = title || siteTitle
  const metaAuthor = author || siteAuthor
  const metaUrl = url || siteUrl
  const metaImage = image || siteImage
  const metaKeywords = keywords || [
    "włoszczyzna",
    "pasta",
    "insalat",
    "pizzeria",
  ]
  return (
    <Helmet
      htmlAttributes={{ lang: "pl" }}
      title={`${title} | ${siteTitle}`}
      meta={[
        { name: "description", content: metaDescription },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          property: "og:url",
          content: metaUrl,
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:creator",
          content: metaAuthor,
        },
        {
          property: "twitter:title",
          content: metaTitle,
        },
        {
          property: "twitter:image",
          content: metaImage,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? { name: "keywords", content: metaKeywords.join(", ") }
          : []
      )}
    ></Helmet>
  )
}

export default React.memo(SEO)

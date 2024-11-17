import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// React-Icons'dan sosyal medya ikonlarını import ediyoruz
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio" style={{ display: "flex", alignItems: "center" }}>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/blog-profile-pic.jpg"
        width={125} // Görselin genişliği artırıldı
        height={100} // Görselin yüksekliği artırıldı
        quality={100}
        alt="Profile picture"
        style={{ borderRadius: "50%" }} // Görseli yuvarlak yapmak için
      />
      <div style={{ marginLeft: "15px" }}>
        {author?.name && <strong style={{ display: "block" }}>{author.name}</strong>}
        {author?.summary && <p style={{ margin: 0 }}>{author.summary}</p>}
        <div style={{ marginTop: "10px", display: "flex", gap: "15px" }}>
          {social?.twitter && (
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} style={{ color: "#1DA1F2" }} />
            </a>
          )}
          {social?.linkedin && (
            <a
              href={`https://linkedin.com/in/${social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} style={{ color: "#0077B5" }} />
            </a>
          )}
          {social?.github && (
            <a
              href={`https://github.com/${social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} style={{ color: "#333" }} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bio

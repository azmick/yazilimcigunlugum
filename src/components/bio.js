import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div className="bio" style={{ display: "flex", alignItems: "center" }}>
      {/* Profil Resmi */}
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/blog-profile-pic.jpg"
        width={125}
        height={100}
        quality={100}
        alt="Profile picture"
        style={{ borderRadius: "50%" }}
      />
      <div style={{ marginLeft: "15px" }}>
        {author?.name && <strong style={{ display: "block" }}>{author.name}</strong>}
        {author?.summary && <p style={{ margin: 0 }}>{author.summary}</p>}

        {/* Sosyal Medya Linkleri */}
        <div style={{ marginTop: "10px", display: "flex", flexDirection: "row", gap: "5px" }}>
          {social?.twitter && (
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077B5"  }}
            >
              X
            </a>
          )}
          {social?.linkedin && (
            <a
              href={`https://linkedin.com/in/${social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077B5" }}
            >
              LinkedIn
            </a>
          )}
          {social?.github && (
            <a
              href={`https://github.com/${social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077B5" }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bio;

import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import logo from '../../assets/img/logo512.png'
import config from '../../../config'

const ArticleTemplate = ({
  content,
  contentComponent,
  cover,
  meta_title,
  meta_desc,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <div className="title-logo has-text-weight-bold">
        <h2> Jueg</h2><img  className="logo" src={logo} alt={title} />
        <h1>{config.empresa}</h1>
      </div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <img src={cover} alt={title} />
      <PostContent content={content} />
      <div style={{ marginTop: `4rem` }}>
        <h4>Tags</h4>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null}
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default ArticleTemplate

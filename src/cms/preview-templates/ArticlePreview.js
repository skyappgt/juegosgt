import React from 'react'
import PropTypes from 'prop-types'
import ArticleTemplate from '../../components/ArticleTemplate'
import moment from 'moment'

const ArticlePreview = ({ entry, widgetFor }) => {
 const date = moment(new Date()).format('DD/MM/YYYY')
 console.log(date)

  return (
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <ArticleTemplate
            content={widgetFor('body')}
            cover={entry.getIn(['data', 'cover'])}
            meta_title={entry.getIn(['data', 'meta_title'])}
            meta_desc={entry.getIn(['data', 'meta_description'])}
            title={entry.getIn(['data', 'title'])}
            slug={entry.getIn(['data', 'slug'])}
          />
        </div>
      </div>
    </div>
  )
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePreview

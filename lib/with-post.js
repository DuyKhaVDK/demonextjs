import React from 'react'
import MyLayout from '../components/MyLayout'
import marked from 'marked'
import Highlight from 'react-highlight'
import styles from './mon.module.css'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

export default function withPost(options) {
  return class PostPage extends React.Component {
    render() {
      return (
        <MyLayout>
          <h1 className={styles.montitle}>{options.title}</h1>
          <div className={styles.mondiv}>
            <Highlight innerHTML>{marked(options.content)}</Highlight>
          </div>
        </MyLayout>
      )
    }
  }
}

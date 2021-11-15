import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import styles from './h1.module.css'

function PostLink(props) {
  return (
    <li>
      <Link href={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default function() {
  return (
    <Layout>
      <h1 className={styles.error}>DANH SÁCH CÁC MÔN HỌC TRONG HỌC KÌ 1</h1>
      <p className={styles.mon}><strong>Click vào từng môn để xem thông tin chi tiết</strong> 👇</p>
      <ul className={styles.mon} >
        <PostLink id="mon1" title="Phân tích thiết kế hướng đối tượng" />
        <p></p>
        <PostLink id="mon2" title="Công nghệ Web" />
        <p></p>
        <PostLink id="mon3" title="Phân tích và thiết kế hệ thống thông tin" />
        <p></p>
        <PostLink id="mon4" title="Kiểm thử phần mềm cơ bản" />
        <p></p>
        <PostLink id="mon5" title="Công nghệ NET" />
        <p></p>
        <PostLink id="mon6" title="Phát triển ứng dụng trên thiết bị di động" />
        <p></p>
        <PostLink id="mon7" title="Quản lý dự án Công nghệ Thông tin" />
      </ul>

    </Layout>
    
    
  )
}

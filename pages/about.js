import Layout from '../components/MyLayout.js'
import styles from './h1.module.css'

export default function() {
  return (
    <div className={styles.mon}>
    <Layout >
      <h1>NHÓM H2LKE</h1>
      <h3><strong>Tên các thành viên:</strong></h3>
      <p>1. Võ Duy Kha</p>
      <p>2. Nguyễn Văn Huy Em</p>
      <p>3. Trần Đức Huy</p>
      <p>4. Nguyễn Thị Thu Hải</p>
      <p>5. Võ Minh Lộc</p>
    </Layout>
    </div>
  )
}

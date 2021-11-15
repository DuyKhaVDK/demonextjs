import Link from 'next/link'
import styles from './a.module.css'
const linkStyle = {
  marginRight: 50
}

export default function Header() {
  return (
    <div className={styles.thea}>
      <Link href="/">
        <a style={linkStyle} className={styles.thea}>🏠 <strong>Trang chủ</strong></a>
      </Link>
      <Link href="/about">
        <a style={linkStyle} className={styles.thea}>🧑🏽‍🤝‍🧑🏻 <strong>Thông tin nhóm</strong></a>
      </Link>
    </div>
  )
}

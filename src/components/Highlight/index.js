import clsx from 'clsx'
import styles from './styles.module.css'

const Highlight = ({ children, className, bg, color }) => {
  const classes = clsx(className, styles.highlight)

  return (
    <span
      className={classes}
      style={{
        color: color || `var(--theme-button-primary-text-color)`,
        backgroundColor: bg || `var(--theme-button-primary-background-color)`
      }}
    >
      {children}
    </span>
  )
}

export default Highlight

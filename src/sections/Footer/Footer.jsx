import styles from './FooterStyles.module.css';

export default function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Kee Liu Yap. <br />
        All rights reserved.
      </p>

      <div className="icon">
        <p>
          All icon by{' '}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </p>
      </div>
    </section>
  );
}

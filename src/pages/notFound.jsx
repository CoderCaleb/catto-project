import { useNavigate } from "react-router";
import styles from "../styles/code.module.scss";
import { route } from 'preact-router';

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <main className={styles.container}>
            <h1 className={styles.code}>
                404
            </h1>

            <p className={styles.content}>
                oops! this site doesn't exist
            </p>

            <button className={styles.backButton} onClick={()=>navigate("/")}>
                back to main site
            </button>
        </main>
    );
}

export default NotFound;

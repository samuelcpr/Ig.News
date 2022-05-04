import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        (
            <button
                type="button"
                className={styles.SinInButton}
            >
                <FaGithub color='#84d361' />
                Samuel Carlos
                <FiX color='#737380' className={styles.closeIcon} />
            </button>
        )
    ) :
        (
            <button
                type="button"
                className={styles.SinInButton}
            >
                <FaGithub color='#eba417' />
                sign in with Github
            </button>
        );

}
import styles from '../../styles/Users.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Test = ({ users }) => {
    return (
        <div>
            <h3>All Users</h3>
            {users.map(user => (
                <Link href={'/usman/' + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Test;
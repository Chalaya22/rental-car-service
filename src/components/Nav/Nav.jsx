import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    alineItems: 'center',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 400,
    color: '#2a363b',
  },
};
export const Nav = () => {
  return (
    <nav>
      {/* <span>
        <BsHouseLockFill size="20" color="rgb(11, 88, 114)" />
      </span> */}
      <NavLink style={styles.link} to="/">
        Home
      </NavLink>
      <NavLink style={styles.link} to="/catalog">
        Catalog
      </NavLink>
      <NavLink style={styles.link} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

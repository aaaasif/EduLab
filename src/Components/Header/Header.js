import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="nav">
            <Link class="nav-link active" aria-current="page" href="#">Active</Link>
            <Link class="nav-link" href="#">Link</Link>
            <Link class="nav-link" href="#">Link</Link>
            <Link class="nav-link disabled">Disabled</Link>
</nav>
        </div>
    );
};

export default Header;
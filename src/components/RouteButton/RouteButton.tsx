import { Link } from 'react-router-dom';

import Plus from "../../assets/images/plus.png";

import './routeButton.sass';

const RouteButton = () => {
    return (
        <Link to="add-link" className="route-button" data-testid="route-button">
            <div >
                <img src={Plus} alt="plus" />
            </div>
            <div >
                <p className="submit-text">SUBMIT A LINK</p>
            </div>
        </Link>
    )

}

export default RouteButton;
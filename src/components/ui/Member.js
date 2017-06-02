import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'
import PropTypes from 'prop-types'

class Member extends Component {
    componentWillMount() {
        this.style = {
            backgroundColor: 'grey'
        }
    }

    render() {

        const { admin, name, thumbnail, email, makeAdmin, removeAdmin } = this.props

        return (
            <div className="member" style={this.style}>
                <h1>{name} {(admin) ? <FaShield /> : null}</h1>
                {(admin) ?
                    <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
                    <a onClick={() => makeAdmin(email)}>Make Admin</a>
                }
                <img src={thumbnail} />
                <p><a className="skiDay__email" href={`mailto:${email}`}>{email}</a></p>
            </div>
        )
    }
}

Member.propTypes = {
    admin: PropTypes.bool,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    makeAdmin: PropTypes.func.isRequired
}

export default Member
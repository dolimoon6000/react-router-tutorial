import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'
import PropTypes from 'prop-types'

class Member extends Component {
    constructor(props) {
        super(props)
        this.makeAdmin = this.makeAdmin.bind(this)
    }
    makeAdmin() {
        const { makeAdmin, email } = this.props
        makeAdmin(email)
    }

    render() {

        const { admin, name, thumbnail, email, makeAdmin } = this.props

        return (
            <div className="member">
                <h1>{name} {(admin) ? <FaShield /> : null}</h1>
                <a className="member__make-amin" href="#" onClick={this.makeAdmin}>Make ADMIN</a>
                <img src={thumbnail} />
                <p><a className="skiDay__email" href={`mailto:${email}`}>{email}</a></p>
            </div>
        )
    }
}

Member.propTypes = {
    admin: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    makeAdmin: PropTypes.func.isRequired
}

export default Member
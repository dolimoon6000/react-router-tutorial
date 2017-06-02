import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://api.randomuser.me/?nat=US&results=12')
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({ members, loading: false }))
    }

    render() {
        const { loading, members } = this.state
        return (
            <div className="member-list">
            	<h1>Society Members</h1>
                {(loading) ? <span>loading..</span> : <span>{members.length} members</span>}

                {(members.length) ?
                    members.map((member, i) =>
                        <Member
                            key={i}
                            name={`${member.name.first} ${member.name.last}`}
                            thumbnail={member.picture.thumbnail}
                            makeAdmin={email => console.log(email)}
                            email={member.email}
                        />
                    ) :
                    <span>Currently 0 members</span>
                }
            </div>
        )    
   }     
}

export default MemberList
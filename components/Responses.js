import React from 'react'
import client from 'utils/client'
import style from './Responses.styl'


const Response = ({member, choice}) => (
    <div className={style.member}>
        <h3 className={style.name}>{member.name}</h3>
        <p className={style.party}>{member.party}</p>
        <p className={style.region}>{member.region === '비례' ? '비례대표' : member.region.name}</p>
    </div>
)


export default () => {
    const [agrees, setAgrees] = React.useState([])
    const [disagrees, setDisagrees] = React.useState([])

    React.useEffect(() => {
        const fetchResponses = async () => {
            const { data } = await client().get(`/api/responses`)

            setAgrees(data.agreed)
            setDisagrees(data.disagreed)
        }
        fetchResponses()
    }, [])

    return (
        <div>
            <div>
                <h3 className={style.title}>찬성한 당선자 목록</h3>
                <ul className={style.list}>
                    {agrees.filter(e => e.candidate.elected).map(response => (
                        <li key={`elected-${response.id}`} style={{padding: '5px 0'}}>
                            <Response member={response.candidate}/>
                        </li>
                    ))}
                </ul>
            </div>

            {agrees.length > 0 &&
                <div>
                    <h3 className={style.title}>전체 찬성한 후보 목록</h3>
                    <ul className={style.list}>
                        {agrees.map(response => (
                            <li key={`agree-${response.id}`} style={{padding: '5px 0'}}>
                                <Response member={response.candidate}/>
                            </li>
                        ))}
                    </ul>
                </div>
            }

            {disagrees.length > 0 &&
                <div>
                    <h3 className={style.title}>반대한 후보 목록</h3>
                    <ul className={style.list}>
                        {disagrees.map(response => (
                            <li key={`disagree-${response.id}`} style={{padding: '5px 0'}}>
                                <Response member={response.candidate} />
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}
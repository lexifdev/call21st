import React from 'react'
import {NextSeo} from 'next-seo'
import cx from 'classnames'

import Ask from 'components/Ask'
import Stats from 'components/Stats'
import Events from 'components/Events'
import Responses from 'components/Responses'

import layout from './layout.styl'
import style from './index.styl'


export default () => {
    return (
        <>
            <NextSeo
                title="21대 국회에 요구한다"
                description=""
                openGraph={{
                    type: `website`,
                    url: `https://call21st.works`,
                    site_name: `후보는 강간죄 개정에 동의하십니까?`,
                    description: `당신의 작은 참여가 성평등한 미래를 만듭니다. 지금 후보에게 질문을 보내보세요.`,
                    images: [{
                        url: `https://call21st.works/images/ogp.png`
                    }]
                }}
                twitter={{
                    cardType: 'summary_large_image'
                }}
            />

            <div className={layout.logo}>
                <h3>
                    <a href="https://call21st.works/" alt="call21st 홈페이지 메인 바로가기">
                        #CALL21ST
                        <img src="/images/logo.svg"/>
                    </a>
                    <span>21대 국회의원 후보자에게 묻습니다</span>
                </h3>
            </div>
            <hr style={{margin: '0', background: '#f7f7f7'}} />
            <section className={cx(style.odd, style.lead)}>
                <div className={layout.container}>
                    <h2>나는 오늘 ‘성평등’에 투표합니다.</h2>
                    <h1><span>강간죄 판단 기준을</span> <span>‘동의’ 여부로 바꾸는 데</span> <span>찬성하십니까?</span></h1>

                    <p>텔레그램 성착취방 26만 명 이용,<br/> 성폭력 해도 쉽게 풀려나고 용서받는 강간문화,<br/> 비난·조롱받으며 찬밥신세된 미투 법안들,<br/> 21대 국회는 바꿀 수 있습니까?</p>
                </div>
            </section>

            <section className={style.even}>
                {/*<div className={layout.container}>*/}
                    <Events />
                {/*</div>*/}
            </section>

            <section className={style.odd}>
                <div className={layout.container}>
                    <h3>후보에게 질문하기</h3>
                    <div>
                        <h1 style={{textAlign: 'center'}}>지금은 질문을 보낼 수 없습니다.</h1>
                    </div>
                </div>
            </section>

            <section className={style.even}>
                <div className={layout.container}>
                    <Stats />
                </div>
            </section>

            <section className={style.odd}>
                <div className={layout.container}>
                    <Responses />
                </div>
            </section>

            <section className={style.even}>
                <div className={layout.container}>
                    <h3>Contact</h3>
                    <div>
                        <p style={{textAlign: 'center'}}><a href="mailto:contact@call21st.works">contact@call21st.works</a></p>
                    </div>
                    <div className={style.credit}>
                        <ul>
                            <li>‘강간죄’개정을위한연대회의</li>
                            <li>셰도우핀즈</li>
                            <li>널채움</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

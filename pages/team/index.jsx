import { useRouter } from 'next/router'
import {
  Button,
  Tabs,
  Tab,
  Row,
  Col
} from 'react-bootstrap'
import stl from '../../styles/Team.module.scss'
import PTHead from '../../components/PTHead/PTHead'
import TeamMember from '../../components/TeamMember/TeamMember'

function Team() {
  const router = useRouter()
  // information about all team's members
  const membersData = [
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'остальные роли'
      },
      photo: '/images/user-1.jpeg',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
  ]
  // data for every tabs on this page
  const tabs = [
    {
      eventKey: 'all',   // use in react-bootstrap Tab component
      tabTitle: 'Все',   // use in react-bootstrap Tab component
      contentTitle: 'Почему с нами хорошо работать?',
      contentText: 'У нас нет корпоративной иерархии, личных секретарей, отдельных кабинетов и ключевых показателей эффективности.  Мы любим свою работу и делаем ее хорошо с ответственностью за результат.\n\nНет должностей, есть роли в проекте. (тут идея про то, что сотрудник выбирает то, чем ему хочется в данный момент заниматься в проекте от своих умений)',
      members: membersData  // array of members who must be on current tab
    },
    {
      eventKey: 'managers',
      tabTitle: 'Менеджеры',
      contentTitle: 'Менеджеры',
      contentText: 'Наша цель - долгосрочные отношения.'
    },
    {
      eventKey: 'developers',
      tabTitle: 'Разработчики',
      contentTitle: 'Команда разработки',
      contentText: 'Делаем быстро, не забывая о качестве.'
    },
    {
      eventKey: 'designers',
      tabTitle: 'Дизайнеры',
      contentTitle: 'Команда UX/UI дизайна',
      contentText: 'Сделать не только красиво, но и — удобно.'
    },
    {
      eventKey: 'testers',
      tabTitle: 'Тестировщики',
      contentTitle: 'Команда QA',
      contentText: 'Найти и обезвредить ошибки.'
    },
  ]

  return (
    <>
      <PTHead
        title='ProninTeam - Команда'
        description='Сюда надо будет написать какое-то описание для каждой отдельной страницы'
        ogType='website'
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='ProninTeam'
      />

{/* Back button */}
      <Button
        className="btn btn--back my-30"
        // href='/#brief'
        onClick={() => router.back()}
      >
        <svg className='btn__icon' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.2002 29.6L15.2002 19.6L25.2002 9.6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Назад
      </Button>

      <section className={ stl.team }>
        <h1 className={ stl.team__title }>
          Наша команда
        </h1>
        
        <Tabs
          defaultActiveKey={ tabs[0].eventKey }  // first tab is active by default
          id="team-tabs"
          className="mb-3"
        >
          {
            tabs.map(tab => {
              return (
                <Tab
                  key={ tab.eventKey }
                  eventKey={ tab.eventKey }
                  title={ tab.tabTitle }
                >
                  <h3 className={ stl.tab__title }>
                    { tab.contentTitle }
                  </h3>

                  <p className={ stl.tab__description }>
                    { tab.contentText }
                  </p>

                  <Row as='ul' className={ stl.tab__members } sm='1' md='3' lg='4'>
                    {
                      tab.members?.map((member, index) => {
                        const photo = member.photo
                        const name = `${member.first_name} ${member.last_name}`
                        const mainRole = member.main_role.title
                        const roles = member.other_roles.title
                        const key = `${tab.eventKey}-${index}`

                        return (
                          <Col key={ key } as='li' className='mb-40 mb-md-60 mb-lg-80'>
                            <TeamMember
                              photo={ photo }
                              name={ name }
                              mainRole={ mainRole }
                              roles={ roles }

                            />
                          </Col>
                        )
                      })
                    }
                  </Row>
                </Tab>
              )
            })
          }
        </Tabs>
      </section>
    </>
  )
}

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Team
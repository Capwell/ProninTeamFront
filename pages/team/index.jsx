import { useRouter } from 'next/router'
import {
  Button,
  Tabs,
  Tab,
  Row,
  Col,
  Container
} from 'react-bootstrap'
import stl from '../../styles/Team.module.scss'
import PTHead from '../../components/PTHead/PTHead'
import TeamMember from '../../components/TeamMember/TeamMember'
import PTButton from '../../components/PTButton/PTButton'

function Team() {
  const router = useRouter()
  // information about all team's members
  const membersData = [
    {
      main_role: {
        title: 'Seo'
      },
      other_roles: {
        title: 'Backend-разработчик'
      },
      photo: '/images/user-1.webp',
      first_name: 'Андрей',
      last_name: 'Пронин',
      middle_name: 'Александрович'
    },
    {
      main_role: {
        title: 'QA'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-2.webp',
      first_name: 'Александр',
      last_name: 'Грабовский',
      middle_name: ''
    },
    {
      main_role: {
        title: 'PM'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-3.webp',
      first_name: 'Каролина',
      last_name: 'Павлычева',
      middle_name: ''
    },
    {
      main_role: {
        title: 'Frontend-разработчик'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-4.webp',
      first_name: 'Егор',
      last_name: 'Романов',
      middle_name: 'Иванович'
    },
    {
      main_role: {
        title: 'Backend-разработчик'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-5.webp',
      first_name: 'Алексей',
      last_name: 'Шевич',
      middle_name: ''
    },
    {
      main_role: {
        title: 'Backend-разработчик'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-6.webp',
      first_name: 'Николай',
      last_name: 'Павлов',
      middle_name: ''
    },
    {
      main_role: {
        title: 'Frontend-разработчик'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-7.webp',
      first_name: 'Сергей',
      last_name: 'Бородулин',
      middle_name: ''
    },
    {
      main_role: {
        title: 'PM'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-8.webp',
      first_name: 'Елена',
      last_name: 'Береза',
      middle_name: ''
    },
    {
      main_role: {
        title: 'PM'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-9.webp',
      first_name: 'Нина',
      last_name: 'Попова',
      middle_name: ''
    },
    {
      main_role: {
        title: 'Дизайнер'
      },
      other_roles: {
        title: ''
      },
      photo: '/images/user-10.webp',
      first_name: 'Олег',
      last_name: 'Кипарисов',
      middle_name: ''
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
      contentText: 'Наша цель - забота о клиенте.',
      members: membersData.filter(member =>  {
        return (
          member.main_role.title === 'PM' ||
          member.other_roles.title === 'PM'
        )
      })
    },
    {
      eventKey: 'developers',
      tabTitle: 'Разработчики',
      contentTitle: 'Команда разработки',
      contentText: 'Делаем быстро, не забывая о качестве.',
      members: membersData.filter(member => {
        return (
          member.main_role.title === 'Frontend-разработчик' ||
          member.other_roles.title === 'Frontend-разработчик' ||
          member.main_role.title === 'Backend-разработчик' ||
          member.other_roles.title === 'Backend-разработчик'
        )
      })
    },
    {
      eventKey: 'designers',
      tabTitle: 'Дизайнеры',
      contentTitle: 'Команда UX/UI дизайна',
      contentText: 'Сделать не только красиво, но и — удобно.',
      members: membersData.filter(member =>  {
        return (
          member.main_role.title === 'Дизайнер' ||
          member.other_roles.title === 'Дизайнер'
        )
      })
    },
    {
      eventKey: 'testers',
      tabTitle: 'Тестировщики',
      contentTitle: 'Команда QA',
      contentText: 'Найти и обезвредить ошибки.',
      members: membersData.filter(member =>  {
        return (
          member.main_role.title === 'QA' ||
          member.other_roles.title === 'QA'
        )
      })
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

      <Container
        as="section"
        fluid="xxl"
        className="mt-30 mb-20"
      >
{/* Back button */}
        <PTButton
          className="mb-30"
          variant="small-back"
          onClick={ () => router.back() }
        />

        <h1 className={ stl.team__title }>
          Наша команда
        </h1>
{/* Tabs */}
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

                  <Row as='ul' className={ stl.tab__members } xs='1' sm='2' md='3' lg='4'>
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
      </Container>
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
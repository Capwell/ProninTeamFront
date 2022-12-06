import { useRouter } from 'next/router'
import {
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
import api from '../../utils/api'

export async function getStaticProps() {
  try {
    let usersData
    const { data, errors } = await api.getTeam()

    if (errors || !data) usersData = []

    return { props: { usersData } }
  } catch (err) {
    return { notFound: true }
  }
}

// function Team({ usersData = [] }) {
// function Team() {
function Team({ usersData }) {
  const router = useRouter()

  // filter user by their roles (main and others)
  const filterUsers = (value) => {
    return usersData?.filter(user => {
      return (
        user.main_role.title === value ||
        user.other_roles.find(role => role.title === value)
      )
    })
  }
  // data for every tabs on this page
  const tabs = [
    {
      eventKey: 'all',   // use in react-bootstrap Tab component
      tabTitle: 'Все',   // use in react-bootstrap Tab component
      contentTitle: 'Почему с нами хорошо работать?',
      contentText: 'У нас нет корпоративной иерархии, личных секретарей, отдельных кабинетов и ключевых показателей эффективности.  Мы любим свою работу и делаем ее хорошо с ответственностью за результат.\n\nНет должностей, есть роли в проекте. (тут идея про то, что сотрудник выбирает то, чем ему хочется в данный момент заниматься в проекте от своих умений)',
      members: usersData  // array of members who must be on current tab
    },
    {
      eventKey: 'managers',
      tabTitle: 'Менеджеры',
      contentTitle: 'Менеджеры',
      contentText: 'Наша цель - забота о клиенте.',
      members: filterUsers('PM')
    },
    {
      eventKey: 'developers',
      tabTitle: 'Разработчики',
      contentTitle: 'Команда разработки',
      contentText: 'Делаем быстро, не забывая о качестве.',
      members: [...filterUsers('Backend-разработчик'), ...filterUsers('Frontend-разработчик')]
    },
    {
      eventKey: 'designers',
      tabTitle: 'Дизайнеры',
      contentTitle: 'Команда UX/UI дизайна',
      contentText: 'Сделать не только красиво, но и — удобно.',
      members: filterUsers('Дизайнер')
    },
    {
      eventKey: 'testers',
      tabTitle: 'Тестировщики',
      contentTitle: 'Команда QA',
      contentText: 'Найти и обезвредить ошибки.',
      members: filterUsers('QA')
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
                        const roles = member.other_roles.length
                          ? member.other_roles.map(role => role.title).join(' ')
                          : null
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

export default Team
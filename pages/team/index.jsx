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

const usersDataLocal = [
  {
    main_role: {
      title: 'Seo'
    },
    other_roles: [
      { title: 'Backend-разработчик' }
    ],
    photo: '/images/team/a_pronin.webp',
    first_name: 'Андрей',
    last_name: 'Пронин'
  },
  {
    main_role: {
      title: 'QA'
    },
    other_roles: [],
    photo: '/images/team/a_grabovskij.webp',
    first_name: 'Александр',
    last_name: 'Грабовский'
  },
  {
    main_role: {
      title: 'PM'
    },
    other_roles: [],
    photo: '/images/team/k_pavlycheva.webp',
    first_name: 'Каролина',
    last_name: 'Павлычева'
  },
  {
    main_role: {
      title: 'Frontend-разработчик'
    },
    other_roles: [],
    photo: '/images/team/e_romanov.webp',
    first_name: 'Егор',
    last_name: 'Романов'
  },
  {
    main_role: {
      title: 'Backend-разработчик'
    },
    other_roles: [],
    photo: '/images/team/a_shevich.webp',
    first_name: 'Алексей',
    last_name: 'Шевич'
  },
  {
    main_role: {
      title: 'Backend-разработчик'
    },
    other_roles: [],
    photo: '/images/team/n_pavlov.webp',
    first_name: 'Николай',
    last_name: 'Павлов'
  },
  {
    main_role: {
      title: 'Frontend-разработчик'
    },
    other_roles: [],
    photo: '/images/team/s_borodulin.webp',
    first_name: 'Сергей',
    last_name: 'Бородулин'
  },
  {
    main_role: {
      title: 'PM'
    },
    other_roles: [],
    photo: '/images/team/e_bereza.webp',
    first_name: 'Елена',
    last_name: 'Береза'
  },
  {
    main_role: {
      title: 'PM'
    },
    other_roles: [],
    photo: '/images/team/n_popova.webp',
    first_name: 'Нина',
    last_name: 'Попова'
  },
  {
    main_role: {
      title: 'Дизайнер'
    },
    other_roles: [],
    photo: '/images/team/o_kiparisov.webp',
    first_name: 'Олег',
    last_name: 'Кипарисов'
  },
]

export async function getStaticProps() {
  let usersData

  try {
    usersData = await api.getTeam()
  } catch (err) {
    usersData = usersDataLocal
  } finally {
    return { props: { usersData } }
  }
}

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
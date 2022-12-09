import { useRouter } from 'next/router'
import { Container, Row, Col } from 'react-bootstrap'
import PTHead from '../../components/PTHead/PTHead'
import PTButton from '../../components/PTButton/PTButton'
import ClientForm from '../../components/ClientForm/ClientForm'
import stl from '../../styles/Services.module.scss'

function Services() {
  const router = useRouter()

  return (
    <>
{/* TODO: доделать голову */}
      <PTHead
        title="Услуги ProninTeam"
        description='В айти компании можно заказать услуги по разработке и поддержке сайтов. Администрирование серверов и сайтов. Дизайн. Верстка. Программирование. Информационная поддержка. Интеграция. Продвижение сайта.'
        ogType='website'
        ogUrl="https://proninteam.ru/services"
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='Услуги ProninTeam по разработке и поддержке сайтов.'
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

        <h1 className={ `${stl.services__title} mb-50 mb-lg-85` }>
          Услуги
        </h1>

        <section className={ `${stl.services__text} mb-60 mb-lg-125` }>
          <h2 className={ `${stl.text__title} mb-25` }>
            Поддержка сайтов
          </h2>

          <ul className={ `${stl.text__list}` }>
            <li className={ `${stl.list__item}` }>
              <strong>Администрирование серверов и сайтов.</strong> Обеспечение безопасности. Резервное копирование. Антивирусная защита. Автоматическое тестирование. Мониторинг 24/7.
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Дизайн.</strong> Редизайн сайта, обработка фото, баннеры.
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Верстка.</strong> Создание новых разделов, лендингов, промо-страниц.
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Программирование</strong> новых функциональных модулей на сайте.
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Информационная поддержка.</strong> Заполнение карточек товарных позиций, актуализация информации, развитие разделов с описаниями, статьями и новостями.
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Интеграция.</strong> С внешними системами, как внутри компании, так и во внешнем контуре.
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Продвижение сайта.</strong> Контекстная реклама, таргетированная реклама, поисковая оптимизация (SEO).
            </li>
            <li className={ `${stl.list__item}` }>
              <strong>Консультации.</strong> Увеличиваем присутствие в интернете на сторонних площадках.
            </li>
            <li className={ `${stl.list__item}` }>
              Размещение сайтов в дата-центре <a href="https://www.netangels.ru/" target="_blank" rel="noreferrer">netangels.ru</a>
            </li>
          </ul>
        </section>

        <section className={ `${stl.services__variants} mb-70 mb-lg-110` }>
          <h2 className={ `${stl.variants__title} mb-40 mb-lg-65` }>
            3 варианта начала работ<br/>
            по поддержке и разработке сайта
          </h2>

          <Row
            as="ul"
            className={ stl.variants__list }
          >
            <Col as="li" className={ stl.list__item }>
              <div className={ stl.item__inner }>
                <h3 className={ stl.item__title }>
                  Быстросайт
                </h3>
                <p className={ stl.item__description }>
                  Если задача типовая и сделать ее можно в течении месяца, мы ее оцениваем, выставляем договор и счёт.<br/>
                  <br/>
                  После оплаты счета начинаем, исполняем и сдаем услуги.<br/>
                  <br/>
                  Все максимально просто.<br/>
                  Оценку и счет постараемся сделать уже в день обращения.
                </p>
                <PTButton
                  className={ stl.item__btn }
                  variant="primary"
                  text="Посмотреть пример"
                  href="/cases/pronin-team/"
                />
              </div>
            </Col>

            <Col as="li" className={ stl.list__item }>
              <div className={ stl.item__inner }>
                <h3 className={ stl.item__title }>
                  Несколько крупных, но разовых задач
                </h3>
                <p className={ stl.item__description }>
                  Несколько крупных, но разовых задач, требующих написания технических заданий.<br/>
                  <br/>
                  Пишем частные технические задания на крупные задачи.<br/>
                  <br/>
                  Оцениваем объемы. Выставляем счета с существенными скидками на цену часа. Получаем оплату. Исполняем и сдаем. Параллельно оцениваем следующие задачи.
                </p>
                <PTButton
                  className={ stl.item__btn }
                  variant="primary"
                  text="Посмотреть пример"
                  href="/cases/unity/"
                />
              </div>
            </Col>

            <Col as="li" className={ stl.list__item }>
              <div className={ stl.item__inner }>
                <h3 className={ stl.item__title }>
                  Постоянный поток задач
                </h3>
                <p className={ stl.item__description }>
                  Подписываем абонентский договор с очень выгодной ценой. <br/>
                  <br/>
                  Сразу начинаем по нему работать. Оценка и написание технических заданий не требуются.<br/>
                  <br/>
                  Проект стартует и ведется максимально быстро.
                </p>
                <PTButton
                  className={ stl.item__btn }
                  variant="primary"
                  text="Посмотреть пример"
                  href="/cases/donor-search"
                />
              </div>
            </Col>
          </Row>
        </section>

        <ClientForm className="mb-70 mb-lg-200" targetPage="Services"/>

      </Container>
    </>
  )
}

export default Services
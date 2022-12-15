import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import PTHead from '../../components/PTHead/PTHead'
import ClientForm from '../../components/ClientForm/ClientForm'
import stl from '../../styles/Services.module.scss'

function Services() {

  return (
    <>
      <PTHead
        title="Услуги ProninTeam"
        description="Услуги по разработке и поддержке сайтов. Администрирование серверов и сайтов. Дизайн. Верстка. Программирование. Информационная поддержка. Интеграция. Продвижение сайта."
        ogSiteName="Услуги ProninTeam по разработке и поддержке сайтов."
      />

      <Container as="section" fluid="xxl" className="mb-20">
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
            <li className={ `${ stl.list__item }` }>
              <strong>Дизайн.</strong> Редизайн сайта, обработка фото, баннеры.
            </li>
            <li className={ `${ stl.list__item }` }>
              <strong>Верстка.</strong> Создание новых разделов, лендингов, промо-страниц.
            </li>
            <li className={ `${ stl.list__item }` }>
              <strong>Программирование</strong> новых функциональных модулей на сайте.
            </li>
            <li className={ `${ stl.list__item }` }>
              <strong>Информационная поддержка.</strong> Заполнение карточек товарных позиций, актуализация информации, развитие разделов с описаниями, статьями и новостями.
            </li>
            <li className={ `${ stl.list__item }` }>
              <strong>Интеграция.</strong> С внешними системами, как внутри компании, так и во внешнем контуре.
            </li>
            <li className={ `${ stl.list__item }` }>
              <strong>Продвижение сайта.</strong> Контекстная реклама, таргетированная реклама, поисковая оптимизация (SEO).
            </li>
            <li className={ `${ stl.list__item }` }>
              <strong>Консультации.</strong> Увеличиваем присутствие в интернете на сторонних площадках.
            </li>
            <li className={ `${ stl.list__item }` }>
              Размещение сайтов в дата-центре <a href="https://www.netangels.ru/" target="_blank" rel="noreferrer">netangels.ru</a>
            </li>
          </ul>
        </section>

        <section className={ `${ stl.services__variants } mb-70 mb-lg-110` }>
          <h2 className={ `${ stl.variants__title } mb-40 mb-lg-65` }>
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
                  Если задача типовая и сделать ее можно в течение месяца - мы ее оцениваем, готовим договор и выставляем счёт.<br/>
                  <br/>
                  После оплаты счета сразу начинаем работу.<br/>
                  <br/>
                  Всё максимально просто.<br/>
                  Оценку и счёт постараемся сделать уже в день обращения.
                </p>

                <Link
                  className={ `${ stl.item__btn } btn btn-primary` }
                  href="/cases/pronin-team/"
                >
                  Посмотреть пример
                </Link>
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

                <Link
                  className={ `${ stl.item__btn } btn btn-primary` }
                  href="/cases/unity/"
                >
                  Посмотреть пример
                </Link>
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

                <Link
                  className={ `${ stl.item__btn } btn btn-primary` }
                  href="/cases/donor-search"
                >
                  Посмотреть пример
                </Link>
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
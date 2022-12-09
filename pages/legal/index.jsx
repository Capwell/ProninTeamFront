import PTHead from '../../components/PTHead/PTHead'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import stl from '../../styles/Legal.module.scss'
import Link from 'next/link'
import PTButton from '../../components/PTButton/PTButton'

function Legal() {
  const router = useRouter()
  // scroll to top on button click
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // or 'auto'
    });
  };

  return (
    <>
{/* TODO: доделать голову */}
      <PTHead
        title='ProninTeam - Правовая информация'
        description='Сюда надо будет написать какое-то описание для каждой отдельной страницы'
        ogType='website'
        ogUrl="https://proninteam.ru/legal"
        ogImg='/images/pronin-team-og-img.webp'
        ogSiteName='ProninTeam'
      />

{/* Back button */}
      <Container fluid="xxl" className="mt-40 mb-100">
        <PTButton
          className="mb-40"
          variant="small-back"
          onClick={ () => router.back() }
        />

        <h1 className={ stl.legal__title }>
          Правовая информация
        </h1>
{/* Content */}
        <ul className={ stl.legal__content }>
          <li className={ stl.content__item }>
            <Link href="#consent" className={ stl.content__link } replace>
              Согласие на обработку персональных данных
            </Link>
          </li>
          <li className={ stl.content__item }>
            <Link href="#privacy" className={ stl.content__link } replace>
              Политика о конфиденциальности
            </Link>
          </li>
        </ul>
{/* Consent document */}
        <a id="consent" className="anchor" />

        <article className={ stl.legal__doc }>

          <h2 className={ stl.doc__title }>
            Согласие на обработку персональных данных
          </h2>

          <div className={ stl.doc__text }>
            Заполняя веб-форму и отправляя указанные в ней персональные данные, я даю свое согласие ИП Пронин Андрей Александрович (ОГРНИП 307732522200026, адрес: 432000 г. Ульяновск, ул. Гончарова 1/17 - 32, далее — ProninTeam) на обработку моих персональных данных в соответствии с политикой конфиденциальности (https://proninteam.ru/legal) с использованием средств автоматизации или без использования таких средств любыми способами, включая, но не ограничиваясь, сбор, запись, систематизацию, накопление, хранение, уточнение, обновление, изменение, электронное копирование, извлечение, использование, передачу (распространение, предоставление, доступ), трансграничную передачу, обезличивание, блокирование, удаление, уничтожение, для целей, указанных ниже.
            <br/><br/>
            Давая согласие, я подтверждаю, что:
            <br/><br/>
            • действую свободно, по своей воле и в своих интересах;
            <br/><br/>
            • являюсь дееспособным;
            <br/><br/>
            • мое согласие является конкретным, информированным и сознательным.
            <br/><br/>
            Цели обработки персональных данных
            <br/><br/>
            Я понимаю, что ProninTeam собирает мои персональные данные с целью:
            <br/><br/>
            <ul>
              <li>надлежащего оказания услуг, принятия и обработки заказов на оказание таких услуг;</li>
              <li>регистрации на Сервисах, идентификации пользователя Сервиса, восстановления пароля от Сервисов, а также в любых других случаях, связанных с такими действиями;</li>
              <li>рассылки сообщений, связанных с предоставлением доступа к сайту https://proninteam.ru;</li>
            </ul>
            Перечень персональных данных, на обработку которых я даю согласие:
            <br/><br/>
            <ul>
              <li>Мои персональные данные: имя, фамилия, адрес электронной почты; номер телефона; место работы и должность.</li>
              <li>Иная информация, обрабатываемая ProninTeam: o данные о технических средствах (устройствах): IP-адрес, вид операционной системы, тип устройства (персональный компьютер, мобильный телефон, планшет), тип браузера, географическое положение, факт заполнения вебформы, время участия в мероприятии; o информация, автоматически получаемая при доступе к Сервисам, в том числе к сайтам с использованием cookies.</li>
            </ul>
            Передача персональных данных третьим лицам.
            <br/><br/>
            Настоящим я признаю и подтверждаю, что в случае необходимости и для достижения указанных выше целей ProninTeam вправе передавать мои персональные данные третьим лицам. Такими третьими лицами являются партнеры, исполнители по договорам, поставщики и иные уполномоченные ими лица. Я также даю согласие на передачу моих персональных данных таким третьим лицам для их обработки в целях и способами, указанными выше. Настоящее согласие действует до момента его отзыва в письменной форме Я уведомлен и согласен с тем, что я могу отписаться от рассылки и отозвать свое согласие в любой момент, написав об этом на электронную почту a@proninteam.ru. Также я могу отозвать согласие, направив в ProninTeam уведомление в письменной форме по указанному выше адресу. Такое уведомление направляется заказным письмом с описью вложения. В случае отзыва моего согласия мои персональные данные будут уничтожены в течение 30 (тридцати) календарных дней с даты получения ProninTeam уведомления об отзыве. Обработка моих персональных данных будет прекращена, за исключением случаев, прямо предусмотренных законодательством Российской Федерации.
          </div>
{/* Button to top */}
          <PTButton
            variant="small-up"
            onClick={ scrollToTop }
          />
{/* Button back */}
          <PTButton
            className="mb-100"
            variant="secondary"
            text="Назад"
            onClick={ () => router.back() }
          />
        </article>
{/* Privacy Policy */}
        <a id="privacy" className="anchor" />

        <article className={ stl.legal__doc }>

          <h2 className={ stl.doc__title }>
            Политика о конфиденциальности
          </h2>

          <div className={ stl.doc__text }>
            Настоящая Политика в области обработки и защиты персональных данных (далее — Политика) применяется ИП Пронин Андрей Александрович (ОГРНИП 307732522200026, адрес: 432000 г. Ульяновск, ул. Гончарова 1/17 - 32, далее — ProninTeam или мы), к интернет-сайтам, аккаунтам в социальных сетях и иным продуктам (услугам) ProninTeam, через которые мы собираем персональные данные и которые ссылаются на Политику.
            <br/><br/>
            В Политике мы рассказываем о всех способах обработки персональных данных при использовании интернет-сайта ProninTeam.
            <br/><br/>
            Политика разработана в соответствии с Федеральным законом от 27.07.2006 г. №152-ФЗ «О персональных данных» (далее — Закон).
            <br/><br/>
            Политика разработана и используется совместно с Согласием на обработку персональных данных.
            <br/><br/>
            1. Общие положения
            <br/><br/>
            1.1. Персональными данными является любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу. Например, персональными данными являются фамилия, имя, отчество, должность, наименование компании, адрес электронной почты, номер телефона, место работы и должность, а также иная информация.
            <br/><br/>
            К персональным данным относится и техническая информация, если ее можно соотнести с физическим лицом. Например, это IP-адрес, вид операционной системы, тип устройства (персональный компьютер, мобильный телефон, планшет), тип браузера, географическое положение, факт заполнения веб-формы, провайдер — поставщик услуг сети Интернет
            <br/><br/>
            Если мы не сможем никаким образом соотнести информацию и физическое лицо, мы не будем считать данную информацию персональными данными.
            <br/><br/>
            1.2. Вы понимаете, что ProninTeam является оператором только тех персональных данных, которые мы получили от вас, как от физического лица, с помощью наших интернет-сайтов,  аккаунтов в социальных сетях и услуг (далее — Сервисы).
            <br/><br/>
            1.3. Настоящий документ определяет политику ProninTeam в области обработки и защиты персональных данных и размещен по адресу https://proninteam.ru/legal. Также ProninTeam предоставляет неограниченный доступ к Политике любому лицу, лично обратившемуся к ProninTeam.
            <br/><br/>
            1.4. Основная цель ProninTeam обеспечить защиту прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну, четкое и неукоснительное соблюдение требований, в первую очередь, российского законодательства в области персональных данных.
            <br/><br/>
            1.5. Действие Политики распространяется на все персональные данные физических лиц, обрабатываемые ProninTeam, а также связанные с обработкой персональных данных процессы. ProninTeam может обрабатывать персональные данные как с применением средств автоматизации, так и без применения таких средств. К процессам в том числе, но не ограничиваясь, могут относится сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), электронное копирование, извлечение, использование, передача (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.
            <br/><br/>
            1.6. ProninTeam осуществляет обработку персональных данных, в том числе хранит их, с помощью находящихся на территории Российской Федерации серверов.
            <br/><br/>
            1.7 ProninTeam вправе вносить изменения в Политику по мере необходимости. Обязательный пересмотр Политики проводится в случае существенных изменений международного или национального законодательства в сфере персональных данных. В случае обработки нами персональных данных, мы обязуемся уведомить о таких изменениях по адресу вашей электронной почты.
            <br/><br/>
            1.8. ProninTeam не проверяет достоверность предоставленных персональных данных и дееспособность лица, их предоставившего. Вы гарантируете, что все данные являются достоверными, актуальными и не нарушают законодательство РФ.
            <br/><br/>
            2. Цели обработки персональных данных:
            <br/><br/>
            ProninTeam руководствуется принципом достаточности, разумности и целесообразности обработки персональных данных. Мы осуществляем связанные с обработкой персональных данных процессы в указанных в настоящем разделе случаях и в соответствующих целях.
            <br/><br/>
            2.1. При доступе к Сервисам — с целью надлежащего выполнения обязательств ProninTeam перед вами, надлежащего оказания услуг, принятия и обработки заказов на оказание таких услуг, регистрации на Сервисах, идентификации пользователя Сервиса, восстановления пароля от Сервиса, а также в любых других случаях, связанных с такими действиями. Использование вами Сервисов означает безоговорочное согласие с настоящей Политикой и указанными в ней условиями обработки персональных данных. В случае несогласия с данной Политикой использование Сервисов должно быть немедленно прекращено.
            <br/><br/>
            2.2. При осуществлении связи с вами — в целях получения от вас любой обратной связи, а также в целях предоставления вам любой необходимой достоверной и полной информации, связанной с деятельностью ProninTeam. В том числе, но не ограничиваясь, сюда относится предоставление информации о Сервисах и услугах, рассылка информации о Сервисах и услугах, мероприятиях и рекламных акциях, организуемых ProninTeam и/или уполномоченными на то третьими лицами. Для связи, ProninTeam вправе использовать указанные вами номер телефона и/или адрес электронной почты.
            <br/><br/>
            2.3. При получении от вас обратной связи с целью:
            <br/><br/>
            <ul>
              <li>получения информации о лояльности и удовлетворенности Сервисами и услугами, дальнейшего ее исследования и обработки;</li>
              <li>анализа по улучшению качества Сервисов и услуг;</li>
              <li>проведения исследований любых категорий.</li>
            </ul>
            3. Перечень обрабатываемых персональных данных
            <br/><br/>
            3.1. Мы можем обрабатывать следующие ваши персональные данные:
            <br/><br/>
            3.1.1. Общие персональные данные: фамилия, имя, отчество, адрес электронной почты, номер телефона, место работы и должность.
            <br/><br/>
            3.2. Иная информация, обрабатываемая ProninTeam:
            <br/><br/>
            3.2.1. Данные о технических средствах (устройствах): IP-адрес, вид операционной системы, тип устройства (персональный компьютер, мобильный телефон, планшет), тип браузера, географическое положение, факт заполнения веб-формы, провайдер — поставщик услуг сети Интернет.
            <br/><br/>
            3.2.2. Информация, автоматически получаемая при доступе к Сервисам, в том числе к интернет-сайтам с использованием cookies. Файлы cookies представляют собой фрагменты текста, который автоматически сохраняется в память вашего интернет-браузера с помощью нашего интернет-сайта. Это позволяет интернет-сайту в необходимых случаях обращаться к сохраненной информации на вашем компьютере и извлекать ее. Мы используем файлы cookies, чтобы можно было запомнить язык, на котором вы используете наш интернет-сайт. В следующий раз, когда вы вернетесь на наш интернет-сайт, мы сможем лучше учесть ваши предпочтения, касающиеся использования нашего интернет-сайта. Большинство интернет-браузеров автоматически сохраняют файлы cookies, но вы всегда можете изменить настройки своего интернет-браузера и отказаться от сохранения файлов cookies;
            <br/><br/>
            3.2.3. Информация, полученная в результате ваших действий, в том числе следующие сведения: о направленных комментариях, запросах, отзывах и вопросах.
            <br/><br/>
            4. Принципы обработки персональных данных
            <br/><br/>
            Достаточность — главный принцип, которого мы неукоснительно придерживаемся при обработке персональных данных. Ваши персональные данные не будут обработаны, если этого действительно не требуется.
            <br/><br/>
            Также, мы обрабатываем персональные данные руководствуясь следующими принципами:
            <br/><br/>
            4.1. Законность и справедливость обработки персональных данных.
            <br/><br/>
            4.2. Обработка персональных данных в соответствии с конкретными, заранее определенными и законными целями.
            <br/><br/>
            4.3. Недопущение объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.
            <br/><br/>
            4.4. Обработке только тех персональных данных, которые отвечают целям их обработки.
            <br/><br/>
            4.5. Соответствие содержания и объема персональных данных заявленным целям обработки.
            <br/><br/>
            4.6. Точность, достаточность, актуальность и достоверность персональных данных.
            <br/><br/>
            4.7. Законность технических мер, направленных на обработку персональных данных.
            <br/><br/>
            4.8. Разумность и целесообразность обработки персональных данных.
            <br/><br/>
            4.9. Хранение персональных данных в позволяющей определить физическое лицо форме возможно не дольше, чем того требуют цели их обработки, либо в течение срока согласия физического лица.
            <br/><br/>
            4.10. Обрабатываемые персональные данные подлежат уничтожению либо обезличиванию незамедлительно в указанных в Политике случаях.
            <br/><br/>
            5. Обработка персональных данных
            <br/><br/>
            5.1. Сбор персональных данных.
            <br/><br/>
            Сбор персональных данных осуществляется следующими способами:
            <br/><br/>
            <ul>
              <li>предоставление вами персональных данных при заполнении форм, в том числе и веб-форм на Сервисах;</li>
              <li>автоматический сбор информации с помощью технологий и сервисов: веб-протоколы, файлов &quot;cookie&quot;, веб-отметки, которые запускаются только при вводе вами своих данных;</li>
              <li>предоставление вами персональных данных в письменной форме, в том числе с помощью средств связи.</li>
            </ul>
            5.2. Хранение и использование персональных данных.
            <br/><br/>
            <ul>
              <li>Персональные данные хранятся исключительно на должным образом защищенных носителях, в том числе электронных, и обрабатываются как с применением средств автоматизации, так и без применения таких средств;</li>
              <li>ProninTeam, при автоматизированной обработке персональных данных, обеспечивает использование баз данных, находящихся на территории Российской Федерации.</li>
            </ul>
            5.3. Передача персональных данных.
            <br/><br/>
            <ul>
              <li>ProninTeam передает персональные данные третьим лицам, включая, но не ограничиваясь, консультантов, партнеров, исполнителей по договорам, подрядчиков и агентов (далее — Консультанты) с вашего согласия. Исключения составляют случаи, когда передача осуществляется для обеспечения соблюдения условий договора, требований законодательства, предупреждения или пресечения ваших незаконных действий и защиты законных интересов ProninTeam и третьих лиц;</li>
              <li>Передача персональных данных Консультантам осуществляется для достижения указанных выше целей и основывается на заключаемом с соответствующим Консультантом договоре. При этом Консультанты обязуются использовать персональные данные исключительно в соответствии с настоящей Политикой, для достижения указанных целей и для оказания услуг по заключенному договору.</li>
            </ul>
            5.4. Уничтожение персональных данных.
            <br/><br/>
            ProninTeam уничтожает персональные данные в следующих случаях:
            <br/><br/>
            <ul>
              <li>наличие угрозы безопасности Сервисов;</li>
              <li>достижение целей обработки персональных данных или в случае утраты необходимости достижения таких целей;</li>
              <li>нарушение вами условий Политики;</li>
              <li>истечение срока хранения персональных данных;</li>
              <li>прекращение действия или расторжение заключенного договора;</li>
              <li>по вашему запросу или в случае отзыва согласия физического лица на обработку персональных данных.</li>
            </ul>
            6. Ваши права
            <br/><br/>
            6.1. Вы имеете право на получение информации об обработке ваших персональных данных, в том числе содержащей:
            <br/><br/>
            <ul>
              <li>подтверждение факта обработки ваших персональных данных;</li>
              <li>правовые основания обработки ваших персональных данных;</li>
              <li>цели и применяемые ProninTeam способы обработки ваших персональных данных;</li>
              <li>какие именно ваши персональные данные мы обрабатываем и источник их получения;</li>
              <li>сроки обработки ваших персональных данных, в том числе сроки их хранения;</li>
              <li>порядок осуществления прав, предусмотренных законодательством Российской Федерации;</li>
              <li>информацию об осуществленной или о предполагаемой трансграничной передаче данных;</li>
              <li>сведения о лицах, которым могут быть раскрыты персональные данные на основании договора с ProninTeam или в соответствии с законодательством Российской Федерации;</li>
              <li>наименование или фамилию, имя, отчество и адрес лица, осуществляющего обработку персональных данных по поручению ProninTeam, если обработка поручена или будет поручена такому лицу;</li>
              <li>иные сведения, предусмотренные законодательством Российской Федерации.</li>
            </ul>
            Вы вправе получать такие сведения неограниченное количество раз. Для этого необходимо направить ProninTeam соответствующий запрос в порядке, предусмотренном разделом 11 Политики.
            <br/><br/>
            7. Обязанности ProninTeam:
            <br/><br/>
            7.1. В соответствии с требованиями Закона ProninTeam обязана:
            <br/><br/>
            7.1.1. предоставлять по вашему запросу информацию об обработке ваших персональных данных, указанную в п. 6.1. Политики, или обоснованный отказ;
            <br/><br/>
            7.1.2. принимать меры, необходимые и достаточные для обеспечения выполнения обязанностей, предусмотренных Законом;
            <br/><br/>
            7.1.3. по вашему требованию уточнять обрабатываемые персональные данные, блокировать или удалять их, если они являются неполными, устаревшими, неточными, незаконно полученными или ненужными для заявленной цели обработки;
            <br/><br/>
            7.1.4. обеспечить правомерность обработки персональных данных. В случае, если обеспечить правомерность обработки персональных данных невозможно, ProninTeam в срок, не превышающий 10 (десять) рабочих дней с даты выявления неправомерной обработки персональных данных, обязана их уничтожить или обеспечить их уничтожение;
            <br/><br/>
            7.1.5. в случае прекращения действия заключенного с вами договора или отзыва вами согласия на обработку персональных данных, мы прекращаем их обработку и уничтожаем их в срок, не превышающий 30 (тридцать) рабочих дней с даты поступления вашего отзыва. Исключения составляют случаи, когда обработка может быть продолжена в соответствии с законодательством Российской Федерации.
            <br/><br/>
            8. Сведения о защите персональных данных
            <br/><br/>
            8.1. Все предоставляемые вами персональные данные конфиденциальны по умолчанию. Защита персональных данных, обрабатываемых ProninTeam, обеспечивается реализацией правовых, организационных и технических мер, необходимых и достаточных для обеспечения требований законодательства Российской Федерации в области защиты персональных данных. Однако, мы всегда стараемся максимально защитить ваши данные и применяем большее число мер по защите персональных данных, чем это предусмотрено законодательством. Вот некоторые из реализуемых ProninTeam мер по защите персональных данных:
            <br/><br/>
            8.2. Правовые меры включают в себя:
            <br/><br/>
            8.2.1. разработку локальных нормативных актов ProninTeam, реализующих требования российского законодательства, в том числе настоящей Политики в отношении обработки и защиты персональных данных, и размещение ее по адресу https://proninteam.ru/legal;
            <br/><br/>
            8.2.2. отказ от любых способов обработки персональных данных, не соответствующих целям, заранее предопределенным ProninTeam.
            <br/><br/>
            8.3. Организационные меры включают в себя:
            <br/><br/>
            8.3.1. назначение лица, ответственного за организацию обработки персональных данных. Вы можете контактировать с таким лицом, используя следующий адрес электронной почты: a@proninteam.ru;
            <br/><br/>
            8.3.2. ограничение состава работников ProninTeam, имеющих доступ к персональным данным, и организацию разрешительной системы доступа к ним;
            <br/><br/>
            8.3.3. периодическая оценка рисков, касающихся процесса обработки персональных данных;
            <br/><br/>
            8.3.4. проведение внутренних расследований для обнаружения фактов, связанных с несанкционированным доступом к персональным данным;
            <br/><br/>
            8.3.5. применение методов шифрования при обработке персональных данных;
            <br/><br/>
            8.3.6. мониторинг и анализ защищенности сетевой инфраструктуры ProninTeam;
            <br/><br/>
            8.3.7. ознакомление работников ProninTeam с положениями законодательства Российской Федерации о персональных данных, в том числе с требованиями к защите персональных данных, с локальными актами ProninTeam по вопросам обработки персональных данных, обучение указанных работников.
            <br/><br/>
            8.3.8. организация режима обеспечения безопасности помещений, в которых размещены носители персональных данных, препятствующий возможности неконтролируемого проникновения или пребывания в этих помещениях лиц, не имеющих права доступа в эти помещения;
            <br/><br/>
            8.3.9. организация тренингов для сотрудников ProninTeam, касающихся различных вопросов обработки персональных данных.
            <br/><br/>
            8.4. ProninTeam обязуется и обязует третьих лиц, в случае передачи им права на обработку персональных данных, соблюдать режим конфиденциальности в отношении персональных данных и не использовать персональные данные без законных оснований их обработки.
            <br/><br/>
            9. Трансграничная передача персональных данных
            <br/><br/>
            9.1. Трансграничная передача персональных данных не осуществляется.
            <br/><br/>
            10. Ограничение действия Политики
            <br/><br/>
            10.1. Вы также обязаны разумно и ответственно подходить к размещению в открытом доступе собственных персональных данных, в том числе на Сервисах в случае оставления отзывов и комментариев.
            <br/><br/>
            10.2. ProninTeam не несет ответственности за действия третьих лиц, получивших доступ к вашим персональным данным по вашей вине последнего.
            <br/><br/>
            11. Обращения Субъекта персональных данных
            <br/><br/>
            11.1. Вы вправе направлять ProninTeam свои запросы, в том числе запросы относительно использования ваших персональных данных:
            <br/><br/>
            11.1.1. в письменной форме по адресу: 432000 г. Ульяновск, ул. Гончарова 1/17 - 32;
            <br/><br/>
            11.1.2. в форме электронного документа по адресу электронной почты: a@proninteam.ru.
            <br/><br/>
            11.2. Запрос должен содержать следующую информацию:
            <br/><br/>
            11.2.1. номер основного документа, удостоверяющего вашу личность;
            <br/><br/>
            11.2.2. сведения о дате выдачи указанного документа и выдавшем его органе;
            <br/><br/>
            11.2.3. сведения, подтверждающие ваше участие в отношениях с ProninTeam;
            <br/><br/>
            11.2.4. ваша подпись.
            <br/><br/>
            11.3. ProninTeam обязуется рассмотреть и направить ответ на поступивший запрос на указанный в запросе адрес в течение 30 (тридцати) календарных дней с момента поступления обращения.
            <br/><br/>
            11.4. Вся корреспонденция, полученная ProninTeam, (обращения в письменной или электронной форме), относится к информации ограниченного доступа и не разглашается без вашего письменного согласия.
            <br/><br/>
            12. Контактная информация и реквизиты ProninTeam:
            <br/><br/>
            ИП Пронин Андрей Александрович
            <br/><br/>
            ОГРНИП: 307732522200026
            <br/><br/>
            Адрес: 432000 г. Ульяновск, ул. Гончарова 1/17 - 32
            <br/><br/>
            ИНН: 732804028311
            <br/><br/>
            Email: a@proninteam.ru
            <br/><br/>
          </div>
{/* Button to top */}
          <PTButton
            variant="small-up"
            onClick={ scrollToTop }
          />
{/* Button back */}
          <PTButton
            variant="secondary"
            text="Назад"
            onClick={ () => router.back() }
          />
        </article>
      </Container>



    </>
  )
}

export default Legal
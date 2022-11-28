import PTHead from "../../components/PTHead/PTHead"

function About() {
  return (
    <>
    {/* <div className={styles.container}> */}
      <PTHead
        title='О нас - ProninTeam'
        description='2 Сюда надо будет написать какое-то описание для каждой отдельной страницы'
        ogTitle='ProninTeam: О нас'
        ogType='website'
        ogImg='https://i.ibb.co/zXWJ0sQ/og-image.jpg'
        ogSiteName='ProninTeam'
      />
      {/* <main className={styles.main}> */}
      <section>
        <h1>О нас</h1>
      </section>
      {/* </main> */}
    {/* </div> */}
    </>
  );
}

export default About;

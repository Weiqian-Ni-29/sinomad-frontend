import NavBarCustomZH from '../../components/zh/NavBarCustomZH';
import "../styles/AboutUs.css";
import banner from '../../assets/imgs/common/intro-banner.jpg';
function AboutUsZH() {
  return (
    <section id="aboutus" className="about-us">
      <div>
        <NavBarCustomZH title='关于我们'/>
        <img className="aboutus-img" src={banner} alt="banner"/>
        <div style={{backgroundColor:'bisque'}}>
          <div className="aboutus-intro">
            <h3>
            我们是谁？
            </h3>
            <p>
            嗨，欢迎来到SiNomad！我们是一支由资深中国旅行社孕育出的年轻活力团队。
            <br/>
            团队成员均毕业于QS世界大学排名前50的顶尖学府，既是拥有全球视野的行业精英，也是足迹遍布各大洲数十个国家的资深旅行者。对东西方文化的深刻理解，让我们能为您打造真正深入骨髓的文化体验。
            </p>
            <h3>我们的旅行哲学</h3>
            <p>
            我们坚信旅行应当如游牧般自由探索。在这里，我们不仅是向导，更是您在中国旅居期间的记忆共创伙伴——通过严选本地资源与专业策划，带您跨越常规旅游的边界。
            <br/>
            专注于中国文化沉浸式体验，我们提供超越"景点打卡"的真实交流，让您与中华文明的精神内核产生深度共鸣。
            </p>
            <h3>即刻启程！</h3>
            <p>
            让我们共同揭开东方古国的神秘面纱，在这片古老而充满活力的土地上留下属于你的印记与回忆。
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
export default AboutUsZH;

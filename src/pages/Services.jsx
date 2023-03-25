import React from 'react'
import Lottie from "lottie-react";

// LOCAL COMPONENTS
import './Services.css'
import Header from '../components/Header/Header';
import service_arrow from '../assets/animated-icons/service_arrow.json'

// IMAGES
import services_header_bg from '../assets/svgs/Header/Services/services_header_bg.png'

// ICONS
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaToolbox, FaGraduationCap, FaSwimmingPool } from "react-icons/fa";
import { AiOutlineFilter, AiOutlineTool } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <Header
        header_heading={'XİDMƏTLƏR'}
        header_image={services_header_bg}
        header_route={"Xidmətlər"} >
      </Header>
      <section className="services-list-section home-section">
        <div className="service-item">
          <div className="service-item-left">
            <MdOutlineCleaningServices />
            <h1 className='service-item-left-heading'>Əsas təmizlik xidmətləri</h1>
          </div>
          <div className="service-item-center">
            <Lottie animationData={service_arrow}></Lottie>
          </div>
          <div className="service-item-right">
            <h3 className="service-info">
              Hovuz xidmətinin təmizlik xidməti təmiz və sağlam hovuz mühitinin qorunması üçün vacibdir. Peşəkar təmizlik xidmətinə adətən hovuzun hərtərəfli təmizlənməsi, o cümlədən zibilin təmizlənməsi, hovuzun döşəməsinin və divarlarının tozsoranlanması, kafel və divarların fırçalanması və hovuzun filtrasiya sisteminin saxlanması daxildir. Xidmət həmçinin hovuzun suyunun üzgüçülər üçün təhlükəsiz olmasını təmin etmək üçün kimyəvi maddələrin sınaqdan keçirilməsini və balanslaşdırılmasını da əhatə edə bilər. Peşəkar hovuz xidməti ilə siz hər zaman istifadəyə hazır olan təmiz hovuzdan həzz ala bilərsiniz. Bu, nəinki dincliyi təmin edir, həm də hovuzun və onun avadanlıqlarının istifadə müddətini uzatmağa kömək edir, nəticədə uzun müddətdə vaxtınıza və pulunuza qənaət edir.
            </h3>
          </div>
        </div>
        <div className="service-item">
          <div class="service-item-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
            </svg>
          </div>
          <div className="service-item-left">
            <FaToolbox />
            <h1 className='service-item-left-heading'>Avadanlıqlara qulluq</h1>
          </div>
          <div className="service-item-center">
            <Lottie animationData={service_arrow}></Lottie>
          </div>
          <div className="service-item-right">
            <h3 className="service-info">
              Avadanlıqlara texniki qulluq və təmir hovuz sahibləri üçün vacib xidmətdir, çünki düzgün texniki qulluq və təmir hovuzun rəvan və səmərəli işləməsini təmin edə bilər. Bu xidmət hovuzda istifadə olunan müxtəlif avadanlıqların, o cümlədən nasosların, filtrlərin, qızdırıcıların və təmizləyicilərin yoxlanılmasını və saxlanılmasını əhatə edir. Müntəzəm texniki yoxlamalar problemlərin yaranmasından əvvəl qarşısını almağa kömək edə bilər, nasazlıqların aradan qaldırılması və təmir isə baş verən hər hansı problemləri tez bir zamanda həll edə bilər. Bundan əlavə, köhnəlmiş və ya qırılmış hissələrin dəyişdirilməsi avadanlığın xidmət müddətini uzatmağa və ümumi işini yaxşılaşdırmağa kömək edə bilər. Müvafiq texniki xidmət və təmir xidmətləri ilə hovuz sahibləri bütün mövsüm boyu təmiz və işlək hovuzdan həzz ala bilərlər.
            </h3>
          </div>
        </div>
        <div className="service-item">
          <div class="service-item-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
            </svg>
          </div>
          <div className="service-item-left">
            <AiOutlineFilter />
            <h1 className='service-item-left-heading'>Filtr təmizliyi</h1>
          </div>
          <div className="service-item-center">
            <Lottie animationData={service_arrow}></Lottie>
          </div>
          <div className="service-item-right">
            <h3 className="service-info">Hovuz filtrinə qulluq hovuzun təmiz və sağlam saxlanması üçün mühüm xidmətdir. Filtr sudan zibil, kir və digər çirkləndiricilərin təmizlənməsində və onun üzgüçülük üçün təhlükəsiz olmasını təmin etməkdə mühüm rol oynayır. Peşəkar hovuz filtrinə texniki xidmət filtr kartuşunun dəyişdirilməsi, filtrin geri yuyulması və ya filtr mühitinin təmizlənməsi daxil olmaqla müxtəlif vəzifələri əhatə edə bilər. Baxım səfəri zamanı texniki mütəxəssis filtrin düzgün və səmərəli işləməsini yoxlayacaq, lazımi hissələri təmizləyəcək və ya dəyişdirəcək. Müntəzəm filtr baxımı tıxanmanın qarşısını almağa və filtrin xidmət müddətini yaxşılaşdırmağa, həmçinin hovuz suyunun ümumi keyfiyyətini yaxşılaşdırmağa kömək edə bilər.</h3>
          </div>
        </div>
        <div className="service-item">
          <div class="service-item-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
            </svg>
          </div>
          <div className="service-item-left">
            <AiOutlineTool />
            <h1 className='service-item-left-heading'>Təmir xidmətləri</h1>
          </div>
          <div className="service-item-center">
            <Lottie animationData={service_arrow}></Lottie>
          </div>
          <div className="service-item-right">
            <h3 className="service-info">
              Hovuz təmiri xidmətləri hovuzun funksionallığını və təhlükəsizliyini qorumaq üçün vacibdir. Sızmaların aradan qaldırılması kimi kiçik təmirlərdən tutmuş zədələnmiş hovuz laynerlərinin dəyişdirilməsi kimi əsaslı təmirə qədər, peşəkar hovuz təmiri xidməti hovuzla bağlı yarana biləcək geniş problemləri həll edə bilər. Hovuz təmirinə həmçinin nasos və motor təmiri, qızdırıcının təmiri, hovuzun göyərtəsinə və ya öhdəsindən gəlməyə dəyən hər hansı zədənin aradan qaldırılması daxildir. Vaxtında təmir xidmətləri problemlərin böyüməsinin və daha çox ziyan vurmasının qarşısını ala bilər, beləliklə hovuz sahibini uzun müddətdə bahalı təmirdən xilas edə bilər. Hovuz təmiri xidmətləri üzgüçülər üçün təhlükə yarada bilən qırıq və ya zədələnmiş hovuz komponentlərini təmir və ya dəyişdirməklə hovuzun təhlükəsizliyini də yaxşılaşdıra bilər.
            </h3>
          </div>
        </div>
        <div className="service-item">
          <div class="service-item-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
            </svg>
          </div>
          <div className="service-item-left">
            <FaGraduationCap />
            <h1 className='service-item-left-heading'>Hovuz təhsili <br /> və təlimi</h1>
          </div>
          <div className="service-item-center">
            <Lottie animationData={service_arrow}></Lottie>
          </div>
          <div className="service-item-right">
            <h3 className="service-info">
              Hovuz təhsili və təlim xidmətləri hovuzunun funksionallığını, təhlükəsizliyini və təmizliyini qorumaq istəyən hovuz sahibləri üçün çox vacibdir. Peşəkar hovuz təhsili və təlim xidməti hovuz sahiblərinə başqa şeylər arasında su kimyası, avadanlıqların saxlanması və təhlükəsizlik protokolları haqqında öyrədə bilər. Bu xidmət hər bir hovuz sahibinin öz xüsusi hovuz növü və avadanlıqları üçün lazımi məlumatları almasını təmin etmək üçün qrup dərsləri və ya təkbətək təlim sessiyalarını əhatə edə bilər. Bu təlim sessiyalarında hovuz sahibləri suyun düzgün sınaqdan keçirilməsi, kimyəvi maddələrin balanslaşdırılması və hovuz avadanlığının saxlanması, hovuzlarının ən yaxşı şəkildə işləməsini təmin etmək haqqında öyrənə bilərlər.
            </h3>
          </div>
        </div>
        <div className="service-item">
          <div class="service-item-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
            </svg>
          </div>
          <div className="service-item-left">
            <FaSwimmingPool />
            <h1 className='service-item-left-heading'>Hovuz suyunun yoxlanışı</h1>
          </div>
          <div className="service-item-center">
            <Lottie animationData={service_arrow}></Lottie>
          </div>
          <div className="service-item-right">
            <h3 className="service-info">
              Hovuz suyunun yoxlanılması təmiz və təhlükəsiz üzgüçülük mühitinin qorunması üçün mühüm xidmətdir. Bu xidmət hovuz suyunun müxtəlif kimyəvi səviyyələr, o cümlədən pH, xlor, qələvilik və kalsium sərtliyi üçün sınaqdan keçirilməsini əhatə edir. Hovuz suyunun düzgün kimyası zərərli bakteriyaların və yosunların böyüməsinin qarşısını almaq və hovuzun üzmək üçün təhlükəsiz olmasını təmin etmək üçün vacibdir. Hovuz suyunun sınağı adətən sudakı kimyəvi səviyyələri müəyyən etmək üçün xüsusi avadanlıq və sınaq dəstlərindən istifadə edən peşəkar hovuz xidməti təminatçısı tərəfindən həyata keçirilir. Test nəticələri əldə edildikdən sonra hovuz xidməti təminatçısı kimyəvi maddələr əlavə etmək və ya pH balansını tənzimləmək kimi suyun kimyasına lazımi düzəlişlər etməyi tövsiyə edə bilər.
            </h3>
          </div>
        </div>
        <div class="footer-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
    </>
  )
}

export default Services
'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import React, { useState, useEffect } from "react"
import SidebarLayout from "../../../../components/Layouts/SidebarLayout"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

//FONTS
Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf"
});

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf"
});


//RENDERER 
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

import ViewerLayout from "../../../../components/Layouts/ViewerLayout"

//Common
import Common_001_partial_001_date from "../../../../components/Common/Common_001_partial_001_date"
import Common_001_partial_002_title from "../../../../components/Common/Common_001_partial_002_title"
import Common_001_partial_003_group from "../../../../components/Common/Common_001_partial_003_group"
import Common_001_partial_006_table from "../../../../components/Common/Common_001_partial_006_table"
import Common_001_partial_007_signature from "../../../../components/Common/Common_001_partial_007_signature"
import Common_001_partial_009_list from "../../../../components/Common/Common_001_partial_009_list"


export default function KonutKiraSozlesmesi() {

  const [pdf, setPdf] = useState(null)


  /* Konut Kira Sözleşmesi
  * Taşınmazın adresi
  * Taşınmazın cinsi
  * Kiraya verenin adı, soyadı, adresi, telefonu, T.C. kimlik numarası
  * Kiracının adı, soyadı, adresi, telefonu, T.C. kimlik numarası
  * Kira bedeli net yıllık ve aylık olarak
  * Nasıl ödeneceği (peşin, aylık, yıllık)
  * Sözleşme imza tarihi
  * Kiranın başlangıç tarihi
  * Kiranın bitiş tarihi
  * Kullanım amacı
  * Demirbaşlar
  * Depozito
  * Kira artış oranı
  * Kira artış tarihi
  */

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      color: '#000000',
      fontFamily: 'Roboto',
      fontSize: 12,
      paddingTop: 30,
      paddingLeft: 60,
      paddingRight: 60,
      lineHeight: 1.5,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },

  });

  const [tasinmazin_adresi, setTasinmazin_adresi] = useState("")
  const [tasinmazin_cinsi, setTasinmazin_cinsi] = useState("Daire") // Daire, Ev, İşyeri, Arsa, Tarla
  const [kiraya_verenin_adi, setKiraya_verenin_adi] = useState("")
  const [kiraya_verenin_soyadi, setKiraya_verenin_soyadi] = useState("")
  const [kiraya_verenin_adresi, setKiraya_verenin_adresi] = useState("")
  const [kiraya_verenin_telefonu, setKiraya_verenin_telefonu] = useState("")
  const [kiraya_verenin_tc_kimlik_numarasi, setKiraya_verenin_tc_kimlik_numarasi] = useState("")
  const [kiracinin_adi, setKiracinin_adi] = useState("")
  const [kiracinin_soyadi, setKiracinin_soyadi] = useState("")
  const [kiracinin_adresi, setKiracinin_adresi] = useState("")
  const [kiracinin_telefonu, setKiracinin_telefonu] = useState("")
  const [kiracinin_tc_kimlik_numarasi, setKiracinin_tc_kimlik_numarasi] = useState("")

  const [kira_bedeli_net_yillik, setKira_bedeli_net_yillik] = useState("0")
  let kira_bedeli_net_aylik = Number(kira_bedeli_net_yillik) / 12
  const [kira_bedeli_net_yillik_doviz, setKira_bedeli_net_yillik_doviz] = useState("Türk Lirası") // Türk Lirası, Dolar, Euro, Sterlin
  let kira_bedeli_net_aylik_doviz = kira_bedeli_net_yillik_doviz
  const [kira_odeme_sekli, setKira_odeme_sekli] = useState("IBAN") // IBAN, EFT, Havale, Nakit, Kredi Kartı
  let kira_odeme_sekli_detay_label = function () {
    return kira_odeme_sekli === "IBAN" ? "IBAN Numarası" : kira_odeme_sekli === "EFT" ? "EFT Hesabı" : kira_odeme_sekli === "Havale" ? "Havale Hesabı" : kira_odeme_sekli === "Nakit" ? "" : "Kredi Kartı Numarası"
  }
  const [kira_odeme_sekli_detay, setKira_odeme_sekli_detay] = useState("") // IBAN numarası, EFT hesabı, Havale hesabı, Kredi kartı numarası, Nakit
  let kira_odeme_sekli_text = function () {
    switch (kira_odeme_sekli) {
      case "IBAN":
        return "adına " + kira_odeme_sekli_detay + " IBAN numarasına yatırılacaktır."
      case "EFT":
        return "adına " + kira_odeme_sekli_detay + " EFT hesabına yatırılacaktır."
      case "Havale":
        return "adına " + kira_odeme_sekli_detay + " Havale hesabına yatırılacaktır."
      case "Nakit":
        return "nakit olarak ödenecektir."
      case "Kredi Kartı":
        return "kredi kartı ile ödenecektir."
      default:
        return "adına " + kira_odeme_sekli_detay + " IBAN numarasına yatırılacaktır."
    }
  }

  const [sozlesme_imza_tarihi, setSozlesme_imza_tarihi] = useState(new Date())
  let sozlesme_imza_tarihi_day_month_year = sozlesme_imza_tarihi.getDate() + "/" + (sozlesme_imza_tarihi.getMonth() + 1) + "/" + sozlesme_imza_tarihi.getFullYear()
  const [kiranin_baslangic_tarihi, setKiranin_baslangic_tarihi] = useState(new Date())
  let kiranin_baslangic_tarihi_day_month_year = kiranin_baslangic_tarihi.getDate() + "/" + (kiranin_baslangic_tarihi.getMonth() + 1) + "/" + kiranin_baslangic_tarihi.getFullYear()

  const [kiranin_bitis_tarihi, setKiranin_bitis_tarihi] = useState(new Date())
  let kiranin_bitis_tarihi_day_month_year = kiranin_bitis_tarihi.getDate() + "/" + (kiranin_bitis_tarihi.getMonth() + 1) + "/" + kiranin_bitis_tarihi.getFullYear()
  const [kullanim_amaci, setKullanim_amaci] = useState("") // Mesken, İşyeri, Depo, Tarla, Diğer
  const [demirbaslar, setDemirbaslar] = useState([])
  let demirbaslar_list = demirbaslar.map((item, index) => {
    return { key: item }
  })
  const [depozito, setDepozito] = useState("0")
  const [depozito_doviz, setDepozito_doviz] = useState("Türk Lirası") // Türk Lirası, Dolar, Euro, Sterlin

  //<Common_001_partial_007_signature props={{ persons: [ { name: 'Ali' }, { name: 'Veli' } ] }} />
  const GeneratedDoc = () => {
    return (
      <Document title="Kira Sözleşmesi" author="Kira Sözleşmesi" >
        <Page size="A4" style={styles.page}>
          <Common_001_partial_001_date props={{ date: sozlesme_imza_tarihi }} />
          <Common_001_partial_002_title props={{ title: "KİRA SÖZLEŞMESİ" }} />
          <Common_001_partial_003_group props={{ title: "A. GENEL ŞARTLAR" }} />
          <Common_001_partial_006_table props={{
            table:
              [{ key: "Taşınmazın Adresi", value: tasinmazin_adresi },
              { key: "Taşınmazın Cinsi", value: tasinmazin_cinsi },
              { key: "Kiraya Verenin Adı Soyadı", value: kiraya_verenin_adi + " " + kiraya_verenin_soyadi },
              { key: "Kiraya Verenin Adresi", value: kiraya_verenin_adresi },
              { key: "Kiraya Verenin Telefonu", value: kiraya_verenin_telefonu },
              { key: "Kiraya Verenin TC Kimlik Numarası", value: kiraya_verenin_tc_kimlik_numarasi },
              { key: "Kiracının Adı Soyadı", value: kiracinin_adi + " " + kiracinin_soyadi },
              { key: "Kiracının Adresi", value: kiracinin_adresi },
              { key: "Kiracının Telefonu", value: kiracinin_telefonu },
              { key: "Kiracının TC Kimlik Numarası", value: kiracinin_tc_kimlik_numarasi },
              { key: "Kira Bedeli Net Yıllık", value: kira_bedeli_net_yillik + " " + kira_bedeli_net_yillik_doviz + " (" + (Number(kira_bedeli_net_yillik) / 12) + " " + kira_bedeli_net_yillik_doviz + " Aylık)" },
              { key: "Kira Ödeme Şekli", value: kira_odeme_sekli },
              { key: "Sözleşme İmza Tarihi", value: sozlesme_imza_tarihi.toDateString() },
              { key: "Kiranın Başlangıç Tarihi", value: kiranin_baslangic_tarihi.toDateString() },
              { key: "Kiranın Bitiş Tarihi", value: kiranin_bitis_tarihi.toDateString() },
              { key: "Kullanım Amacı", value: kullanim_amaci },
              { key: "Depozito", value: depozito + " " + kira_bedeli_net_yillik_doviz },
              { key: "Demirbaşlar", value: demirbaslar.length > 0 ? "Demirbaşlar EK-1'de belirtilmiştir." : "Demirbaş yoktur." }
              ]
          }} />
          <Common_001_partial_007_signature props={{ table: [{ key: kiraya_verenin_adi + " " + kiraya_verenin_soyadi, value: "Kiraya Veren" }, { key: kiracinin_adi + " " + kiracinin_soyadi, value: "Kiracı" }] }} />
        </Page>
        <Page size="A4" style={styles.page}>
          <Common_001_partial_003_group props={{ title: "B. GENEL ŞARTLAR" }} />
          <Common_001_partial_009_list props={{
            "table": [
              {
                "key": "Kiracı kiraladığı şeyi kendi malı gibi iyi kullanmaya, zarar vermemeye, bozulmasına ve itibar kaybetmesine meydan vermemeye mecburdur."
              },
              {
                "key": "Kiralanan, kiracı tarafından üçüncü şahsa kısmen veya tamamen kiralanamaz."
              },
              {
                "key": "Kiralanın, kiracı tarafından kullanım amacına aykırı olarak kullanılması yahut kiralananın niteliğinin değiştirilmesi halinde, kiraya veren kira akdini bozabileceği gibi bu yüzden meydana gelecek zarar ve ziyanı protesto çekmeye ve hüküm almaya gerek olmaksızın kiracı tarafından tazmin edilir."
              },
              {
                "key": "Kiracı, kiralanan şeyin olağan bakım, gider, tadilat ve tamiratını derhal yapmakla yükümlüdür. Aksi halde bundan doğacak her türlü zarar ve ziyanı tazminle yükümlüdür. Kiracının kusuru olmaksızın kiralanan şeyin olağan dışı tamiri gerekir ise kiracı hemen kiraya verene yazılı şekilde haber vermeye mecburdur.\nHaber vermez ise zarardan mesul olur. Haber vermeden tamiri yaptırır ve 3. bir şahıs onun üzerinde bir hak iddia ederse bundan kiracı mesul olur. Ancak kiracı kusuru olmaksızın kiralanan şeyin olağan dışı tamiri gerektiğinde kiraya verene yazılı haber vermesine rağmen, kiraya verenin haberdar olmasından itibaren 10(on) gün içerisinde tamirinin yaptırılmaması halinde kiracı gerekeni yaptıracak, bundan doğacak masraf ise kiraya verene ait olacaktır.\nKiralayan ya da yönetim tarafından yapılacak olan faydalı tamiratların icrasına kiracı, işletmenin işleyişini engellememesi ve kendisini(kiracıyı) zarara uğratmaması halinde müsaade etmeye mecburdur. Kiracı, zaruri tamiratların yapılmasına ise her halükarda müsaade edecektir. Kiralanan şeyin alelade kullanılması için menteşelemek, cam taktırmak, reze koymak, kilit ve sürgü yerleştirmek, badana gibi ufak tefek kusurlar kiraya verene haber vermeden ve münasip süre beklemeden kiracı tarafından yaptırılırsa masrafı kiraya verenden istenilemez."
              },
              {
                "key": "Kiralanan şeyin vergisi kiraya verene, kullanılması için lazım gelen temizleme ve ıslah masrafları kiracıya aittir."
              },
              {
                "key": "Kiracı, kiralananı ne halde kullanmaya başladı/teslim aldı ise kiraya verene o halde teslim etmeye mecburdur. Kiracı, kiralanan gayrimenkul içinde bulunan kiraya verene ait demirbaş eşya ve gayrimenkule ilişik/montajlı tüm alet, cihaz, makine, tesisat vb. eklentileri kontrat süresi bitiminde tamamen ve sağlam, çalışır halde teslim etmekle yükümlüdür."
              }
            ]
          }} />
          <Common_001_partial_007_signature props={{ table: [{ key: kiraya_verenin_adi + " " + kiraya_verenin_soyadi, value: "Kiraya Veren" }, { key: kiracinin_adi + " " + kiracinin_soyadi, value: "Kiracı" }] }} />
        </Page>
        <Page size="A4" style={styles.page}>
          <Common_001_partial_003_group props={{ title: "C. ÖZEL ŞARTLAR" }} />
          <Common_001_partial_009_list props={{
            "table": [
              {
                "key": "Taraflar 6 maddelik yasal hükümlerden oluşan genel şartları peşinen kabul etmişler ve ek özel koşul maddelerini de birlikte belirlemişlerdir."
              },
              {
                "key": "Kiracı, kiralanan taşınmazın kullanımını başkasına devredemez, kiralayanın muvafakati olmadan kiraya veremez, kullanım şeklini değiştiremez. Taşınmaz yalnızca kiracının kullanımına açıktır. Tahliyenin sağlanması konusundaki tüm sorumluluk münhasıran kiracıya aittir."
              },
              {
                "key": `İşbu kira sözleşmesi, 1 yıl süre için akdedilmiştir. Kira sözleşmesi ${sozlesme_imza_tarihi_day_month_year} tarihinde başlar ve ${kiranin_bitis_tarihi_day_month_year} tarihinde sona erer. Birinci yıl kira bedeli aylık net ${kira_bedeli_net_aylik} ${kira_bedeli_net_aylik_doviz} olmak üzere ` + kira_odeme_sekli_text() + ` Kira bedeli her ayın son iş günü saat 17:00'ye kadar ödenecektir. Kira süresinin bitiminde taraflarca yenilenmesi halinde, yeni dönem kira bedeli, hiçbir ihtara gerek olmaksızın yıllık TÜFE oranında arttırılarak ödenecektir. Sonraki yenilenen yıllarda da kira bedeli artışı aynı şekilde belirlenecektir.`
              },
              {
                "key": "Kira müddeti bittiği halde kiracı, kiralanan şeyi boşaltmadığı surette kiraya verenin doğacak zarar ve ziyanını tazmin edecektir."
              },
              {
                "key": "Kiralanan ve eklentilerinde, kiracının sebep olduğu meydana gelebilecek her türlü hasar ve arıza, kiracı tarafından derhal giderilecek ve bunlar dolayısıyla kiraya verenden bir talepte bulunulmayacak ve kiradan mahsup edilmeyecektir."
              },
              {
                "key": "Kiralananın kullanımı sırasında 3.şahıslara verilebilecek her türlü zarardan ve hukuki – cezai durumlardan, kiracı tek başına sorumlu olup kiraya verene rücu edemez."
              },
              {
                "key": "Kiracı, kendi kusuruyla verdiği zararın giderilmesi maksadından hariç, kiraya verenin yazılı izni olmadan demirbaşlar da dahil olmak üzere kiralananda herhangi bir surette tadilat yapamaz."
              },
              {
                "key": "Kira paralarının kiracıdan başkası tarafından yatırılması, yatırana kiracılık sıfatı kazandırmaz. Kiralaya verenin buna ses çıkarmaması, kiracının değiştiği veya buna onay verdiği anlamına gelmeyecektir."
              },
              {
                "key": "Kiralanan taşınmazın elektrik, su giderleri, çevre  - temizlik vergisi, ısınma giderleri, yönetim giderleri, aidatları, taşınmazın ortak giderleri (kapıcı, kalorifer yakıt parası, asansör bakımı – onarımı ve temizlik ile yönetim giderleri) kiracının sorumluluğundadır."
              },
              {
                "key": "Kiracı, kiralananı tahliye ederken yapmış olduğu faydalı, dekor ve tefrişat dolayısıyla kiralayandan herhangi bir talepte bulunamaz."
              }
            ]
          }} />
          <Common_001_partial_007_signature props={{ table: [{ key: kiraya_verenin_adi + " " + kiraya_verenin_soyadi, value: "Kiraya Veren" }, { key: kiracinin_adi + " " + kiracinin_soyadi, value: "Kiracı" }] }} />
        </Page>
        <Page size="A4" style={styles.page}>
          <Common_001_partial_003_group props={{ title: "C. ÖZEL ŞARTLAR (DEVAM)" }} />
          <Common_001_partial_009_list props={{
            "table": [
              {
                "key": "Kiracı, taşınmazı boyalı/badanalı teslim almış olup teslim ederken de boya/badanasını yaptırıp teslim edecektir. Kiracı, taşınmazı, kira dönemi sonunda kira başlangıcındaki gibi temiz, sağlam, hasarsız ve kullanıma hazır halde teslim edecektir."
              },
              {
                "key": "Taraflar işbu sözleşmedeki adreslerini yasal tebligat adresi olarak kabul etmiş olup bu adreslerde oluşabilecek değişiklikler karşı tarafa yazılı olarak bildirilmedikçe bu adreslerden herhangi birine yapılacak tebligat tarafların kendilerine yapılmış sayılacaktır."
              },
              {
                "key": "İşbu sözleşmede kararlaştırılan hususlar dolayısıyla fesih, tadil ya da sözleşmeye hüküm ilavesi ancak yazılı olmak koşuluyla geçerlidir. Zımni ya da teamülden kaynaklanacak fesih, tadil ve ilave iddiaları hiçbir durumda geçerli değildir. Sözleşmenin bazı hükümlerinin kiracı tarafından ihlali ve süresi ne olursa olsun buna ses çıkarılmamış olması ilgili hükmün değiştirildiği veya ilave edildiği ya da sözleşmenin feshedildiği anlamına gelmez."
              },
              {
                "key": `Yukarıda belirtilen taşınmazın, kiralanmasına ilişkin tarafların rızası ile oluşan işbu sözleşme kiralayan ve kiracı tarafından ${sozlesme_imza_tarihi_day_month_year} tarihinde tanzim ve imza edilmiştir.`
              }
            ]
          }} />
          <Common_001_partial_007_signature props={{ table: [{ key: kiraya_verenin_adi + " " + kiraya_verenin_soyadi, value: "Kiraya Veren" }, { key: kiracinin_adi + " " + kiracinin_soyadi, value: "Kiracı" }] }} />
        </Page>
        {demirbaslar.length > 0 ?
          <Page size="A4" style={styles.page}>
            <Common_001_partial_003_group props={{ title: "EK-1 DEMİRBAŞLAR" }} />
            <Common_001_partial_009_list props={{
              "table": demirbaslar_list
            }} />
            <Common_001_partial_007_signature props={{ table: [{ key: kiraya_verenin_adi + " " + kiraya_verenin_soyadi, value: "Kiraya Veren" }, { key: kiracinin_adi + " " + kiracinin_soyadi, value: "Kiracı" }] }} />
          </Page>
          : null}
      </Document>
    )
  }

  function sidebar() {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-row text-center">
          <h1 className="text-2xl font-bold text-center">Kira Sözleşmesi</h1>
        </div>
        {/* Tasinmazin adresi */}
        <div>
          <label htmlFor="tasinmazin_adresi" className="block text-sm font-medium leading-6 text-gray-900">Taşınmazın Adresi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="tasinmazin_adresi" id="tasinmazin_adresi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Taşınmazın adresi" onChange={(e) => setTasinmazin_adresi(e.target.value)} />
          </div>
        </div>
        {/* Tasinmazin cinsi */}
        <div>
          <label htmlFor="tasinmazin_cinsi" className="block text-sm font-medium leading-6 text-gray-900">Taşınmazın Cinsi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <select id="tasinmazin_cinsi" name="tasinmazin_cinsi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setTasinmazin_cinsi(e.target.value)}>
              <option>Daire</option>
              <option>Ev</option>
              <option>İşyeri</option>
              <option>Arsa</option>
              <option>Tarla</option>
            </select>
          </div>
        </div>
        {/* Kiraya verenin adi */}
        <div>
          <label htmlFor="kiraya_verenin_adi" className="block text-sm font-medium leading-6 text-gray-900">Kiraya Verenin Adı</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiraya_verenin_adi" id="kiraya_verenin_adi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiraya verenin adı" onChange={(e) => setKiraya_verenin_adi(e.target.value)} />
          </div>
        </div>
        {/* Kiraya verenin soyadi */}
        <div>
          <label htmlFor="kiraya_verenin_soyadi" className="block text-sm font-medium leading-6 text-gray-900">Kiraya Verenin Soyadı</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiraya_verenin_soyadi" id="kiraya_verenin_soyadi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiraya verenin soyadı" onChange={(e) => setKiraya_verenin_soyadi(e.target.value)} />
          </div>
        </div>
        {/* Kiraya verenin adresi */}
        <div>
          <label htmlFor="kiraya_verenin_adresi" className="block text-sm font-medium leading-6 text-gray-900">Kiraya Verenin Adresi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiraya_verenin_adresi" id="kiraya_verenin_adresi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiraya verenin adresi" onChange={(e) => setKiraya_verenin_adresi(e.target.value)} />
          </div>
        </div>
        {/* Kiraya verenin telefonu */}
        <div>
          <label htmlFor="kiraya_verenin_telefonu" className="block text-sm font-medium leading-6 text-gray-900">Kiraya Verenin Telefonu</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiraya_verenin_telefonu" id="kiraya_verenin_telefonu" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiraya verenin telefonu" onChange={(e) => setKiraya_verenin_telefonu(e.target.value)} />
          </div>
        </div>
        {/* Kiraya verenin tc kimlik numarasi */}
        <div>
          <label htmlFor="kiraya_verenin_tc_kimlik_numarasi" className="block text-sm font-medium leading-6 text-gray-900">Kiraya Verenin TC Kimlik Numarası</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiraya_verenin_tc_kimlik_numarasi" id="kiraya_verenin_tc_kimlik_numarasi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiraya verenin tc kimlik numarası" onChange={(e) => setKiraya_verenin_tc_kimlik_numarasi(e.target.value)} />
          </div>
        </div>
        {/* Kiracinin adi */}
        <div>
          <label htmlFor="kiracinin_adi" className="block text-sm font-medium leading-6 text-gray-900">Kiracının Adı</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiracinin_adi" id="kiracinin_adi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiracının adı" onChange={(e) => setKiracinin_adi(e.target.value)} />
          </div>
        </div>
        {/* Kiracinin soyadi */}
        <div>
          <label htmlFor="kiracinin_soyadi" className="block text-sm font-medium leading-6 text-gray-900">Kiracının Soyadı</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiracinin_soyadi" id="kiracinin_soyadi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiracının soyadı" onChange={(e) => setKiracinin_soyadi(e.target.value)} />
          </div>
        </div>
        {/* Kiracinin adresi */}
        <div>
          <label htmlFor="kiracinin_adresi" className="block text-sm font-medium leading-6 text-gray-900">Kiracının Adresi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiracinin_adresi" id="kiracinin_adresi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiracının adresi" onChange={(e) => setKiracinin_adresi(e.target.value)} />
          </div>
        </div>
        {/* Kiracinin telefonu */}
        <div>
          <label htmlFor="kiracinin_telefonu" className="block text-sm font-medium leading-6 text-gray-900">Kiracının Telefonu</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiracinin_telefonu" id="kiracinin_telefonu" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiracının telefonu" onChange={(e) => setKiracinin_telefonu(e.target.value)} />
          </div>
        </div>
        {/* Kiracinin tc kimlik numarasi */}
        <div>
          <label htmlFor="kiracinin_tc_kimlik_numarasi" className="block text-sm font-medium leading-6 text-gray-900">Kiracının TC Kimlik Numarası</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="kiracinin_tc_kimlik_numarasi" id="kiracinin_tc_kimlik_numarasi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kiracının tc kimlik numarası" onChange={(e) => setKiracinin_tc_kimlik_numarasi(e.target.value)} />
          </div>
        </div>
        {/* Kira bedeli net yillik ve Doviz */}
        <div>
          <label htmlFor="kira_bedeli_net_yillik" className="block text-sm font-medium leading-6 text-gray-900">Kira Bedeli Net Yıllık</label>
          <div className="mt-1 relative rounded-md shadow-sm grid grid-cols-8 gap-2">
            <input type="number" name="kira_bedeli_net_yillik" id="kira_bedeli_net_yillik" className="col-span-6 block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Kira bedeli net yıllık" onChange={(e) => setKira_bedeli_net_yillik(e.target.value)} />
            <select id="kira_bedeli_net_yillik_doviz" name="kira_bedeli_net_yillik_doviz" className="col-span-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setKira_bedeli_net_yillik_doviz(e.target.value)}>
              <option>Türk Lirası</option>
              <option>Dolar</option>
              <option>Euro</option>
              <option>Sterlin</option>
            </select>
          </div>
        </div>
        {/* Kira odeme sekli */}
        <div>
          <label htmlFor="kira_odeme_sekli" className="block text-sm font-medium leading-6 text-gray-900">Kira Ödeme Şekli</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <select id="kira_odeme_sekli" name="kira_odeme_sekli" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setKira_odeme_sekli(e.target.value)}>
              <option>IBAN</option>
              <option>EFT</option>
              <option>Havale</option>
              <option>Nakit</option>
              <option>Kredi Kartı</option>
            </select>
          </div>
        </div>
        {/* Ödeme Şekli Detay */}
        {kira_odeme_sekli === "Nakit" || kira_odeme_sekli === "Kredi Kartı" ?
          null :
          <div>
            {kira_odeme_sekli === "IBAN" ?
              <label htmlFor="kira_odeme_sekli_detay" className="block text-sm font-medium leading-6 text-gray-900">IBAN Numarası</label>
              : kira_odeme_sekli === "EFT" ?
                <label htmlFor="kira_odeme_sekli_detay" className="block text-sm font-medium leading-6 text-gray-900">Banka Adı, Şube Adı, Hesap Numarası</label>
                : kira_odeme_sekli === "Havale" ?
                  <label htmlFor="kira_odeme_sekli_detay" className="block text-sm font-medium leading-6 text-gray-900">Banka Adı, Şube Adı, Hesap Numarası</label> :
                  null}

            <div className="mt-1 relative rounded-md shadow-sm">
              <input type="text" name="kira_odeme_sekli_detay" id="kira_odeme_sekli_detay" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={kira_odeme_sekli === "IBAN" ? "IBAN Numarası" : kira_odeme_sekli === "EFT" ? "Banka Adı, Şube Adı, Hesap Numarası" : kira_odeme_sekli === "Havale" ? "Banka Adı, Şube Adı, Hesap Numarası" : null} onChange={(e) => setKira_odeme_sekli_detay(e.target.value)} />
            </div>
          </div>
        }



        {/* Depozito */}
        <div>
          <label htmlFor="depozito" className="block text-sm font-medium leading-6 text-gray-900">Depozito</label>
          <div className="mt-1 relative rounded-md shadow-sm grid grid-cols-8 gap-2">
            <input type="number" name="depozito" id="depozito" className="col-span-6 block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Depozito" onChange={(e) => setDepozito(e.target.value)} />
            <select id="depozito_doviz" name="depozito_doviz" className="col-span-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setDepozito_doviz(e.target.value)}>
              <option>Türk Lirası</option>
              <option>Dolar</option>
              <option>Euro</option>
              <option>Sterlin</option>
            </select>
          </div>
        </div>
        {/* Sozlesme imza tarihi */}
        <div>
          <label htmlFor="sozlesme_imza_tarihi" className="block text-sm font-medium leading-6 text-gray-900">Sözleşme İmza Tarihi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="date" name="sozlesme_imza_tarihi" id="sozlesme_imza_tarihi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setSozlesme_imza_tarihi(new Date(e.target.value))} />
          </div>
        </div>
        {/* Kiranin baslangic tarihi */}
        <div>
          <label htmlFor="kiranin_baslangic_tarihi" className="block text-sm font-medium leading-6 text-gray-900">Kiranın Başlangıç Tarihi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="date" name="kiranin_baslangic_tarihi" id="kiranin_baslangic_tarihi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setKiranin_baslangic_tarihi(new Date(e.target.value))} />
          </div>
        </div>
        {/* Kiranin bitis tarihi */}
        <div>
          <label htmlFor="kiranin_bitis_tarihi" className="block text-sm font-medium leading-6 text-gray-900">Kiranın Bitiş Tarihi</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input type="date" name="kiranin_bitis_tarihi" id="kiranin_bitis_tarihi" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setKiranin_bitis_tarihi(new Date(e.target.value))} />
          </div>
        </div>
        {/* Kullanim amaci */}
        <div>
          <label htmlFor="kullanim_amaci" className="block text-sm font-medium leading-6 text-gray-900">Kullanım Amacı</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <select id="kullanim_amaci" name="kullanim_amaci" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setKullanim_amaci(e.target.value)}>
              <option>Mesken</option>
              <option>İşyeri</option>
              <option>Depo</option>
              <option>Tarla</option>
              <option>Diğer</option>
            </select>
          </div>
        </div>
        {/* Demirbaslar */}
        <div>
          <div className="flex flex-row justify-between">
            <label htmlFor="demirbaslar" className="block text-sm font-medium leading-6 text-gray-900">Demirbaşlar</label>
            <button className="" onClick={() => setDemirbaslar([...demirbaslar, ""])}>
              <FontAwesomeIcon icon={faPlus} style={{ width: "1.5em", height: "1.5em" }} />

            </button>
          </div>
          <div className="mt-1 relative rounded-md shadow-sm">
            {demirbaslar.map((demirbas, index) => {
              return (
                <div key={index} className="flex flex-row gap-2">
                  <input type="text" name="demirbas" id="demirbas" className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Demirbaş" onChange={(e) => {
                    const newDemirbaslar = [...demirbaslar]
                    newDemirbaslar[index] = e.target.value
                    setDemirbaslar(newDemirbaslar)
                  }} />
                  <button className="btn btn-ghost" onClick={() => {
                    const newDemirbaslar = [...demirbaslar]
                    newDemirbaslar.splice(index, 1)
                    setDemirbaslar(newDemirbaslar)
                  }}>
                    Sil
                  </button>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    )
  }

  const options = {
    standardFontDataUrl: '/standard_fonts/',
  };

  return (
    <SidebarLayout sidebar={sidebar()} >
      <ViewerLayout>
        <GeneratedDoc />
      </ViewerLayout>
    </SidebarLayout>
  )
}


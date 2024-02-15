'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import React, { useState, useEffect } from "react"
import SidebarLayout from "../../../components/Layouts/SidebarLayout"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

//RENDERER 
import { Document, Text, View, StyleSheet, Page } from '@react-pdf/renderer';

import ViewerLayout from "../../../components/Layouts/ViewerLayout"

//Common Components
import Common_001_partial_001_date from "../../../components/Common/Common_001_partial_001_date"
import Common_001_partial_002_title from "../../../components/Common/Common_001_partial_002_title"
import Common_001_partial_003_group from "../../../components/Common/Common_001_partial_003_group"
import Common_001_partial_006_table from "../../../components/Common/Common_001_partial_006_table"
import Common_001_partial_007_signature from "../../../components/Common/Common_001_partial_007_signature"

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
  const [kira_bedeli_net_yillik_doviz, setKira_bedeli_net_yillik_doviz] = useState("Türk Lirası") // Türk Lirası, Dolar, Euro, Sterlin
  const [kira_odeme_sekli, setKira_odeme_sekli] = useState("IBAN") // IBAN, EFT, Havale, Nakit, Kredi Kartı
  const [sozlesme_imza_tarihi, setSozlesme_imza_tarihi] = useState(new Date())
  const [kiranin_baslangic_tarihi, setKiranin_baslangic_tarihi] = useState(new Date())
  const [kiranin_bitis_tarihi, setKiranin_bitis_tarihi] = useState(new Date())
  const [kullanim_amaci, setKullanim_amaci] = useState("") // Mesken, İşyeri, Depo, Tarla, Diğer
  const [demirbaslar, setDemirbaslar] = useState([])
  const [depozito, setDepozito] = useState(0)

  //<Common_001_partial_007_signature props={{ persons: [ { name: 'Ali' }, { name: 'Veli' } ] }} />
  const GeneratedDoc = () => {
    return (
      <>
        <Page pageNumber={1}>
          <View>
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
                { key: "Kullanım Amacı", value: kullanim_amaci }
                ]
            }} />
            <Common_001_partial_007_signature props={{ persons: [{ name: kiraya_verenin_adi + " " + kiraya_verenin_soyadi }, { name: kiracinin_adi + " " + kiracinin_soyadi }] }} />
          </View>
          <View>
          </View>
        </Page>
        <Page>
          jjjj
          <Common_001_partial_007_signature props={{ persons: [{ name: kiraya_verenin_adi + " " + kiraya_verenin_soyadi }, { name: kiracinin_adi + " " + kiracinin_soyadi }] }} />
        </Page>
      </>
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



import React from "react";

const Footer = () => {

    return (
        <div className="px-4">
            <footer className="footer p-10 bg-base-100 text-base-content rounded-t-2xl">
                <aside>
                    <p><a href="https://sozlesmeci.com.tr" className="link link-hover">Sözleşmeci</a> © {new Date().getFullYear()}. Tüm hakları saklıdır.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Hizmetler</h6>
                    <a className="link link-hover">Sözleşmeler</a>
                    <a className="link link-hover">Kimlik Doğrulama</a>
                    <a className="link link-hover">E-imza</a>
                    <a className="link link-hover">Döküman Yönetimi</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Şirket</h6>
                    <a className="link link-hover">Hakkımızda</a>
                    <a className="link link-hover">İletişim</a>
                    <a className="link link-hover">Kariyer</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Yasal</h6>
                    <a className="link link-hover">Kullanım koşulları</a>
                    <a className="link link-hover">Gizlilik politikası</a>
                    <a className="link link-hover">Çerez politikası</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
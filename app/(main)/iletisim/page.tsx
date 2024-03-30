import React from "react";

const Contact1 = () => {
    return (
        <div className="bg-base-100  2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">İletişim</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Sözleşmeci hakkında daha fazla bilgi almak veya sorularınızı sormak için bizimle iletişime geçebilirsiniz. Aşağıdaki formu doldurarak bize ulaşabilirsiniz.</p>

                    <form className="flex flex-col gap-4 pt-8">
                        <input type="text" placeholder="Adınız" className="border border-gray-300 p-2 rounded-md" />
                        <input type="email" placeholder="E-posta Adresiniz" className="border border-gray-300 p-2 rounded-md" />
                        <textarea placeholder="Mesajınız" className="border border-gray-300 p-2 rounded-md" rows={5}></textarea>
                        <button className="bg-primary text-white py-2 rounded-md">Gönder</button>
                    </form>
            
                </div>

                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://picsum.photos/400" alt="A group of People" />
                </div>
        
            </div>

        </div>
    );
};

export default Contact1;

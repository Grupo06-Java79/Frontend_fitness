const MapaParques = () => (
    <div className="flex justify-center w-full">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117027.6700669555!2d-46.64886683955999!3d-23.56432404085673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparques%20em%20sao%20paulo!5e0!3m2!1spt-BR!2sbr!4v1742230807445!5m2!1spt-BR!2sbr"
            className="w-[350px] sm:w-[480px] md:w-[450px] lg:w-[450px] h-[250px] sm:h-[350px] md:h-[300px] lg:h-[300px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
);
export default MapaParques;
